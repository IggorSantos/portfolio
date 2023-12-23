import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CardResumeComponent } from './card-resume/card-resume.component';
import { CardEducationComponent } from './card-education/card-education.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    CardResumeComponent,
    CardEducationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    CardResumeComponent,
    CardEducationComponent
  ]
})
export class SharedComponentsModule { }