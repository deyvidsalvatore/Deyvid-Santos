import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { projects } from '../data/projects.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects: any;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Deyvid Santos - Portfolio');
  }
  ngOnInit(): void {
    this.projects = projects;
  }

}
