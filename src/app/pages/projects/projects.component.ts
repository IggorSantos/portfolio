import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {"nameProject": "Cinequiz",
     "description": "Um projeto criado durante a Imersão React v2 da Alura.",
     "img": "./assets/imgs/cinequiz.png",
     "link": "https://github.com/IggorSantos/cineQuiz"
    },
    {"nameProject": "Github Api",
    "description": "Um projeto consumindo a api do Github para pesquisa de usuários",
    "img": "./assets/imgs/github-api.png",
    "link": "https://github.com/IggorSantos/github-api"
   },
   {"nameProject": "Splitter",
   "description": "Um projeto criado conforme desafio do Frontend Mentor.",
   "img": "./assets/imgs/splitter.png",
   "link": "https://github.com/IggorSantos/tipCalculatorApp"
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
