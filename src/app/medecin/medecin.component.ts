import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent {
  patientDetails: any[] | undefined;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getPatientsDetails();
  }

  getPatientsDetails() {
    this.patientService.getPatientsDataObservable().subscribe((data: any[]) => {
      this.patientDetails = data;
    });
  }
}

