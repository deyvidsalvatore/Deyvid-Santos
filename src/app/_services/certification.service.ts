import { Injectable } from '@angular/core';
import { Certification } from '../_models/Certification';
import { certifications } from '../data/certifications.data';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  certifications: Certification[];

  constructor() {
    this.certifications = certifications;
  }

  getCertifications() {
    return this.certifications;
  }
}
