import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-resume',
  templateUrl: './card-resume.component.html',
  styleUrls: ['./card-resume.component.css']
})
export class CardResumeComponent implements OnInit {
  @Input('edu') educations: any

  constructor() { }

  ngOnInit(): void {
  }

}
