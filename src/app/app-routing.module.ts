import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren:() => import('./pages/home/home.module').then(m => m.HomeModule) },
  {path: 'projects', loadChildren:() => import('./pages/projects/projects.module').then(m => m.ProjectsModule) },
  {path: 'resume', loadChildren:() => import('./pages/resume/resume.module').then(m => m.ResumeModule) },
  {path: 'education', loadChildren:() => import('./pages/education/education.module').then(m => m.EducationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
