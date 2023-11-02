import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModelComponent } from './ng-model.component';

@NgModule({
  declarations: [
    NgModelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    FormsModule
  ]
})
export class NgModelModule { }
