import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationComponent } from './education.component';
import { EducationRoutingModule } from './education-routing.module';

import { SharedComponentsModule } from 'src/app/components/shared-components.module';


@NgModule({
  declarations: [EducationComponent],
  imports: [
    CommonModule,
    EducationRoutingModule,
    SharedComponentsModule
  ]
})
export class EducationModule { }
