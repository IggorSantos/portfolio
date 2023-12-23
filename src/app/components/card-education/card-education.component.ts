import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-education',
  templateUrl: './card-education.component.html',
  styleUrls: ['./card-education.component.css']
})
export class CardEducationComponent implements OnInit {
  @Input('edu') edu: any

  constructor() { }

  ngOnInit(): void {
  }

}
