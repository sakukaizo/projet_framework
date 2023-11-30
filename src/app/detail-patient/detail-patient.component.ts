import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.css']
})
export class DetailPatientComponent {
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

