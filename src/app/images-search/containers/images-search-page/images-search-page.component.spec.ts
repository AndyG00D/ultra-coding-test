import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesSearchPageComponent } from './images-search-page.component';

describe('ImagesSearchPageComponent', () => {
  let component: ImagesSearchPageComponent;
  let fixture: ComponentFixture<ImagesSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesSearchPageComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
