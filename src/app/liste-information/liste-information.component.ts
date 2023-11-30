import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-liste-information',
  templateUrl: './liste-information.component.html',
  styleUrls: ['./liste-information.component.css']
})
export class ListeInformationComponent { 

  patientDetails: any[] | undefined;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.getPatientsDetails();
  }

  getPatientsDetails() {
    this.patientService.getPatientsDataObservable().subscribe((data: any[]) => {
      this.patientDetails = data;
    });
  }
}
