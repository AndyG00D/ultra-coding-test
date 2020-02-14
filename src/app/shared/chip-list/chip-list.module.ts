import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipListComponent } from './chip-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChipListComponent],
  exports: [ChipListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ChipListModule { }
