import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesSearchRoutingModule } from './images-search-routing.module';
import {ImagesSearchPageComponent} from './containers/images-search-page/images-search-page.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChipListModule} from '../shared/chip-list/chip-list.module';


@NgModule({
  declarations: [
    ImagesSearchPageComponent
  ],
  imports: [
    CommonModule,
    ImagesSearchRoutingModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    ChipListModule
  ]
})
export class ImagesSearchModule { }
