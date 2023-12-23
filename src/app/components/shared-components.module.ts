import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CardResumeComponent } from './card-resume/card-resume.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    CardResumeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    CardResumeComponent
  ]
})
export class SharedComponentsModule { }