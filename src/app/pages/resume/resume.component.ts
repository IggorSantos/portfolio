import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  jobs = [
    {"title": "Front-end Developer",
    "local": "Dix Digital",
    "date": "Maio de 2022 - Abril de 2023",
    "description": "Atuei como frontend developer auxiliando na construção de sites utilizando o HTML,CSS,Angular,entre outros e na construção de mockups utilizando o Figma. Trabalhei principalmente na construção de ecomerces, onde realizei toda a parte visual além do consumo de APis Rest."
    },
    {"title": "Estagiário",
    "local": "Dix Digital",
    "date": "Dezembro de 2021 - Abril de 2022",
    "description": "Estagiei na Dix Digital na posição de front end developer, onde auxiliei na construção de sites utilizando HTML,CSS,Angular,entre outros e também na construção de mockups com o Figma."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
