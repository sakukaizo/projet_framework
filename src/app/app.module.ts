import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { BarreDeNavigationComponent } from './barre-de-navigation/barre-de-navigation.component';
import { ListeInformationComponent } from './liste-information/liste-information.component';
import { ParametreComponent } from './parametre/parametre.component';
import { MedecinComponent } from './medecin/medecin.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AjouterMedComponent } from './ajouter-med/ajouter-med.component';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';
import { ProfilComponent } from './profil/profil.component';
import { SuiviComponent } from './suivi/suivi.component';
import { DossierAdministratifComponent } from './dossier-administratif/dossier-administratif.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    BarreDeNavigationComponent,
    ListeInformationComponent,
    ParametreComponent,
    MedecinComponent,
    AjouterComponent,
    AjouterMedComponent,
    DetailPatientComponent,
    ProfilComponent,
    SuiviComponent,
    DossierAdministratifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
