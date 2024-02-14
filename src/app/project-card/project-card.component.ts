import { Component, Input, inject } from '@angular/core';
import { Project } from '../_models/Project';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})

export class ProjectCardComponent {
  private modalService = inject(NgbModal);

  @Input() project = {} as Project;
  
  openProjectModal() {
    const modalRef = this.modalService.open(ProjectModalComponent);
    modalRef.componentInstance.project = this.project;
  } 
}
