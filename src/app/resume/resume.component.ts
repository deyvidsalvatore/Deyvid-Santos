import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CertificationService } from '../_services/certification.service';
import { certifications } from '../data/certifications.data';
import { Certification } from '../_models/Certification';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  certifications: Certification[];

  constructor(private titleService: Title, private renderer: Renderer2, private certificationService: CertificationService) {
    this.titleService.setTitle('Deyvid Santos - Resume');
  }

  ngOnInit(): void {
    this.certifications = this.certificationService.getCertifications();
  }

  downloadResume() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Resume.pdf');
    link.setAttribute('download', 'Resume.pdf')
    link.click();
    link.remove();
  }
  
}
