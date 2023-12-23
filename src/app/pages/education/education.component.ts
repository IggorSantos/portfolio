import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations = [
    {"title": "Tecnólogo em Analise e Desenvolvimento de Sistemas",
    "local": "IFBA - Campus Irecê",
    "date": "2015-2020",
    },
    {"title": "Ensino Médio",
    "local": "Colégio Polivalente de Irecê",
    "date": "2010-2012",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
