import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent {
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

