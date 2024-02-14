import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  featuredProject: Project;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Deyvid Santos - Home');
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(0);
  }

}
