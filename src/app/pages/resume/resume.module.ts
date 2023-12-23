import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';

import { SharedComponentsModule } from 'src/app/components/shared-components.module';


@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    SharedComponentsModule
  ]
})
export class ResumeModule { }
