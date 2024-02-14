import { Component, inject } from '@angular/core';
import { Project } from '../_models/Project';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  project: Project;

  activeModalRef = inject(NgbActiveModal);

}
