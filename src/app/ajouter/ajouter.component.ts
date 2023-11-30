import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {  
   
 
  nom: string = '';
  prenom: string = '';
  dateNaissance: Date = new Date();
  adresse: string = '';
  tel1: string = '';
  tel2: string = '';
  numSecuriteSociale: string = '';
  caisse: string = '';
  taille: string = '';
  poids: string = '';
  profession: string = '';
  medecinNom: string = '';
  specialite: string = '';
  adresseMedecin: string = '';
  telephoneMedecin: string = '';
  dateEnregistrement: Date = new Date();
  iah: string = '';
  datesObservances7Jours: string = '';
  datesObservances1Mois: string = '';
  datesObservances2Mois: string = '';
  datesObservances3Mois: string = '';
  accordCNAM: string = '';
  numBL: string = '';
  dateBL: Date = new Date();
  numFacture: string = '';
  dateFacture: Date = new Date();
  dateInstallationCPAP: Date = new Date(); 
  showValidationMessage: boolean | undefined;

  constructor(private PatientService: PatientService) {}

  onSubmit() {
    const patientData = {
      nom: this.nom,
      prenom: this.prenom,
      dateNaissance: this.dateNaissance,
      adresse: this.adresse,
      tel1:this.tel1,
      tel2: this.tel2 ,
      numSecuriteSociale: this.numSecuriteSociale,
      caisse: this.caisse,
      taille: this.taille,
      poids: this.poids,
      profession: this.profession,
      medecinNom: this.medecinNom,
      specialite: this.specialite ,
      adresseMedecin: this.adresseMedecin,
      telephoneMedecin:this.telephoneMedecin,
      dateEnregistrement: this.dateEnregistrement,
      iah:this.iah,
      datesObservances7Jours: this.datesObservances7Jours,
      datesObservances1Mois: this.datesObservances1Mois,
      datesObservances2Mois: this.datesObservances2Mois,
      datesObservances3Mois: this.datesObservances3Mois,
      accordCNAM: this.accordCNAM,
      numBL: this.numBL,
      dateBL: this.dateBL,
      numFacture: this.numFacture,
      dateFacture: this.dateFacture,
      dateInstallationCPAP: this.dateInstallationCPAP,
    };


    this.PatientService.addPatient(patientData);


}

}
