import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesComponent } from './technologies.component';
import { DecoratorsInputOutputModule } from './components/decorators-input-output/decorators-input-output.module';


@NgModule({
  declarations: [
    TechnologiesComponent,
  ],
  imports: [
    CommonModule,
    DecoratorsInputOutputModule
  ],
  exports: [
    TechnologiesComponent
  ]
})
export class TechnologiesModule { }
