import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

import { SharedComponentsModule } from 'src/app/components/shared-components.module';


@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedComponentsModule,
  ]
})
export class ProjectsModule { }
