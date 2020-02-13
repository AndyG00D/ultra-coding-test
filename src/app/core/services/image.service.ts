import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiConfig} from '../api-config';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) {
  }

  public searchGifs(params: any = {}): Observable<any> {
    return this.http.get<any>(`${ApiConfig.gifsSearchPath}`, {params: {...ApiConfig.commonHttpParams, ...params}});
  }

}
