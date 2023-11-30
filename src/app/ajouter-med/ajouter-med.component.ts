import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-ajouter-med',
  templateUrl: './ajouter-med.component.html',
  styleUrls: ['./ajouter-med.component.css']
})
export class AjouterMedComponent {
  nouveauNom: string = '';
  nouvelleSpecialite: string = '';
  nouvelleAdresse: string = '';
  nouveauTelephone: string = '';

  constructor(private patientService: PatientService) { }

  onSubmit(): void {
    const newMedicalRecord = {
      nom: this.nouveauNom,
      specialite: this.nouvelleSpecialite,
      adresse: this.nouvelleAdresse,
      telephone: this.nouveauTelephone
    };
    this.patientService.addPatient(newMedicalRecord);

  }
}
