import {Component, OnInit} from '@angular/core';
import {ImagesService} from '../../../core/services/image.service';
import {FormControl} from '@angular/forms';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'uct-images-search-page',
  templateUrl: './images-search-page.component.html',
  styleUrls: ['./images-search-page.component.scss']
})
export class ImagesSearchPageComponent implements OnInit {
  public data: any[];
  public pageSize: number = 9;
  public totalCount: number;
  public search: FormControl = new FormControl('');
  private pagination$: BehaviorSubject<number> = new BehaviorSubject<number>(1);


  constructor(private imagesService: ImagesService) {
  }

  public get pagination(): number {
    return this.pagination$.value;
  }

  public ngOnInit(): void {
    this.handleSearchingImages();
  }

  public setPagination(value: number): void {
    return this.pagination$.next(value);
  }

  private handleSearchingImages(): void {
    combineLatest([this.getSearchChanges(), this.getPaginationChanges()])
      .pipe(
        map(([query, pageIndex]) => this.prepareSearchParams(query, pageIndex, this.pageSize)),
        switchMap(params => this.imagesService.searchGifs(params))
      )
      .subscribe(response => {
        this.totalCount = response.pagination.total_count;
        this.data = response.data;
      }
      );
  }

  private getSearchChanges(): Observable<string> {
    return this.search.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.setPagination(1))
    );
  }

  private getPaginationChanges(): Observable<number> {
    return this.pagination$.pipe(
      distinctUntilChanged()
    );
  }

  private prepareSearchParams(query: string, pageIndex: number, pageSize: number): any {
    return {
      q: query,
      limit: pageSize,
      offset: (pageIndex - 1) * pageSize
    };
  }
}
