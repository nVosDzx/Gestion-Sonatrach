import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';

/* FirebaseModules */
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppComponent } from './app.component';
import { HomeComponent } from './data/apps/home/home.component';
import { BaieFormComponent } from './data/forms/baie-form/baie-form.component';
import { BaieComponent } from './data/apps/baie/baie.component';
import { NavBarComponent } from './data/nav-bar/nav-bar.component';
import { RegisterComponent } from './auth/data/register/register.component';
import { NotFoundComponent } from './auth/data/not-found/not-found.component';
import { environment } from 'src/environments/environment';
import { TaskService } from './auth/services/management/task/task.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoComponent } from './data/apps/to-do/to-do.component';
import { MetierFormComponent } from './data/forms/metier-form/metier-form.component';
import { MetierComponent } from './data/apps/metier/metier.component';
import { GestionComponent } from './data/apps/gestion/gestion.component';
import { BackupComponent } from './data/apps/backup/backup.component';
import { PvrComponent } from './data/apps/pvr/pvr.component';
import { CalculeComponent } from './data/apps/calcule/calcule.component';
import { GestionFormComponent } from './data/forms/gestion-form/gestion-form.component';
import { BackupFormComponent } from './data/forms/backup-form/backup-form.component';
import { PvrFormComponent } from './data/forms/pvr-form/pvr-form.component';
import { CalculeFormComponent } from './data/forms/calcule-form/calcule-form.component';
import { InterventionComponent } from './data/extra/intervention/intervention.component';
import { MissionComponent } from './data/extra/mission/mission.component';
import { ReunionComponent } from './data/extra/reunion/reunion.component';
import { FormationComponent } from './data/extra/formation/formation.component';
import { StagiaireComponent } from './data/extra/stagiaire/stagiaire.component';
import { FormationFormComponent } from './data/forms/extra-forms/formation-form/formation-form.component';
import { MissionFormComponent } from './data/forms/extra-forms/mission-form/mission-form.component';
import { ReunionFormComponent } from './data/forms/extra-forms/reunion-form/reunion-form.component';
import { StagiaireFormComponent } from './data/forms/extra-forms/stagiaire-form/stagiaire-form.component';
import { InterventionFormComponent } from './data/forms/extra-forms/intervention-form/intervention-form.component';
import { ASComponent } from './data/extra/intervention-list/as/as.component';
import { AMComponent } from './data/extra/intervention-list/am/am.component';
import { AGComponent } from './data/extra/intervention-list/ag/ag.component';
import { ABAComponent } from './data/extra/intervention-list/aba/aba.component';
import { APVComponent } from './data/extra/intervention-list/apv/apv.component';
import { ACTComponent } from './data/extra/intervention-list/act/act.component';
import { InterventionAMFormComponent } from './data/forms/extra-forms/intervention-am-form/intervention-am-form.component';
import { InterventionAgFormComponent } from './data/forms/extra-forms/intervention-ag-form/intervention-ag-form.component';
import { InterventionAbaFormComponent } from './data/forms/extra-forms/intervention-aba-form/intervention-aba-form.component';
import { InterventionApvFormComponent } from './data/forms/extra-forms/intervention-apv-form/intervention-apv-form.component';
import { InterventionActFormComponent } from './data/forms/extra-forms/intervention-act-form/intervention-act-form.component';
import { RegisterFormComponent } from './auth/data/register-form/register-form.component';
import { LoginComponent } from './auth/data/login/login.component';
import { BackgroundComponent } from './data/background/background.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaieFormComponent,
    BaieComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ToDoComponent,
    MetierFormComponent,
    MetierComponent,
    GestionComponent,
    BackupComponent,
    PvrComponent,
    CalculeComponent,
    GestionFormComponent,
    BackupFormComponent,
    PvrFormComponent,
    CalculeFormComponent,
    InterventionComponent,
    MissionComponent,
    ReunionComponent,
    FormationComponent,
    StagiaireComponent,
    FormationFormComponent,
    MissionFormComponent,
    ReunionFormComponent,
    StagiaireFormComponent,
    InterventionFormComponent,
    ASComponent,
    AMComponent,
    AGComponent,
    ABAComponent,
    APVComponent,
    ACTComponent,
    InterventionAMFormComponent,
    InterventionAgFormComponent,
    InterventionAbaFormComponent,
    InterventionApvFormComponent,
    InterventionActFormComponent,
    RegisterFormComponent,
    BackgroundComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [TaskService,MatSnackBar,MatSelectModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
