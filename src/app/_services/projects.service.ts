import { Injectable } from '@angular/core';
import { projects } from '../data/projects.data';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[];

  constructor() {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);
    if(project === undefined) throw new TypeError('There is no project that matches the id: ' + id);
    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[];

    this.projects.forEach((project) => {
      let foundAll = true;
      
      filterTags.forEach((filterTag) => {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
