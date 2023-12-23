import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  educations = [
    {"title": "Tecnólogo em Analise e Desenvolvimento de Sistemas",
    "local": "IFBA - Campus Irecê-Bahia",
    "date": "2015-2020"
    },
    {"title": "Ensino Médio",
    "local": "Escola Polivalente de Irecê",
    "date": "2010-2012"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
