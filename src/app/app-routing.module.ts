import { BackgroundComponent } from './data/background/background.component';
import { NavBarComponent } from './data/nav-bar/nav-bar.component';
import { RegisterFormComponent } from './auth/data/register-form/register-form.component';
import { InterventionActFormComponent } from './data/forms/extra-forms/intervention-act-form/intervention-act-form.component';
import { InterventionApvFormComponent } from './data/forms/extra-forms/intervention-apv-form/intervention-apv-form.component';
import { InterventionAbaFormComponent } from './data/forms/extra-forms/intervention-aba-form/intervention-aba-form.component';
import { InterventionAgFormComponent } from './data/forms/extra-forms/intervention-ag-form/intervention-ag-form.component';
import { InterventionAMFormComponent } from './data/forms/extra-forms/intervention-am-form/intervention-am-form.component';
import { ACTComponent } from './data/extra/intervention-list/act/act.component';
import { APVComponent } from './data/extra/intervention-list/apv/apv.component';
import { ABAComponent } from './data/extra/intervention-list/aba/aba.component';
import { AGComponent } from './data/extra/intervention-list/ag/ag.component';
import { AMComponent } from './data/extra/intervention-list/am/am.component';
import { ASComponent } from './data/extra/intervention-list/as/as.component';
import { StagiaireFormComponent } from './data/forms/extra-forms/stagiaire-form/stagiaire-form.component';
import { MissionFormComponent } from './data/forms/extra-forms/mission-form/mission-form.component';
import { ReunionFormComponent } from './data/forms/extra-forms/reunion-form/reunion-form.component';
import { FormationFormComponent } from './data/forms/extra-forms/formation-form/formation-form.component';
import { InterventionFormComponent } from './data/forms/extra-forms/intervention-form/intervention-form.component';
import { PvrFormComponent } from './data/forms/pvr-form/pvr-form.component';
import { PvrComponent } from './data/apps/pvr/pvr.component';
import { MetierComponent } from './data/apps/metier/metier.component';
import { MetierFormComponent } from './data/forms/metier-form/metier-form.component';
import { ToDoComponent } from './data/apps/to-do/to-do.component';
import { AuthGuard } from './auth/services/authguards/auth-guard/auth-guard.service';
import { BaieComponent } from './data/apps/baie/baie.component';
import { NotFoundComponent } from './auth/data/not-found/not-found.component';
import { RegisterComponent } from './auth/data/register/register.component';

import { BaieFormComponent } from './data/forms/baie-form/baie-form.component';
import { HomeComponent } from './data/apps/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionComponent } from './data/apps/gestion/gestion.component';
import { BackupComponent } from './data/apps/backup/backup.component';
import { CalculeComponent } from './data/apps/calcule/calcule.component';
import { GestionFormComponent } from './data/forms/gestion-form/gestion-form.component';
import { BackupFormComponent } from './data/forms/backup-form/backup-form.component';
import { CalculeFormComponent } from './data/forms/calcule-form/calcule-form.component';
import { InterventionComponent } from './data/extra/intervention/intervention.component';
import { FormationComponent } from './data/extra/formation/formation.component';
import { ReunionComponent } from './data/extra/reunion/reunion.component';
import { MissionComponent } from './data/extra/mission/mission.component';
import { StagiaireComponent } from './data/extra/stagiaire/stagiaire.component';
import { LoginComponent } from './auth/data/login/login.component';
import { AdminGuardService } from './auth/services/authguards/admin-guard/admin-guard.service';



const routes: Routes = [
    {path:'' , component:BackgroundComponent,canActivate:[AuthGuard] },

    {path:'baies/add', component:BaieFormComponent,canActivate:[AuthGuard] },
    {path:'baies/:id' , component:BaieFormComponent,canActivate:[AuthGuard] },
    {path:'baies', component:BaieComponent,canActivate:[AuthGuard] },

    {path:'metier/add', component:MetierFormComponent,canActivate:[AuthGuard] },
    {path:'metier/:id' , component:MetierFormComponent,canActivate:[AuthGuard] },
    {path:'metier', component:MetierComponent,canActivate:[AuthGuard] },

    {path:'gestion/add', component:GestionFormComponent,canActivate:[AuthGuard] },
    {path:'gestion/:id' , component:GestionFormComponent,canActivate:[AuthGuard] },
    {path:'gestion', component:GestionComponent,canActivate:[AuthGuard] },

    {path:'backup/add', component:BackupFormComponent,canActivate:[AuthGuard] },
    {path:'backup/:id' , component:BackupFormComponent,canActivate:[AuthGuard] },
    {path:'backup', component:BackupComponent,canActivate:[AuthGuard] },

    {path:'pvr/add', component:PvrFormComponent,canActivate:[AuthGuard] },
    {path:'pvr/:id' , component:PvrFormComponent,canActivate:[AuthGuard] },
    {path:'pvr', component:PvrComponent,canActivate:[AuthGuard] },

    {path:'centre-de-traitement/add', component:CalculeFormComponent,canActivate:[AuthGuard] },
    {path:'centre-de-traitement/:id' , component:CalculeFormComponent,canActivate:[AuthGuard] },
    {path:'centre-de-traitement', component:CalculeComponent,canActivate:[AuthGuard] },

    
    {path:'intervention', component:InterventionComponent,canActivate:[AuthGuard] },

    {path:'intervention-ACT/add', component:InterventionActFormComponent,canActivate:[AuthGuard] },
    {path:'intervention-ACT/:id' , component:InterventionActFormComponent,canActivate:[AuthGuard] },
    {path:'intervention-ACT', component:ACTComponent,canActivate:[AuthGuard] },

    {path:'intervention-APV/add', component:InterventionApvFormComponent,canActivate:[AuthGuard] },
    {path:'intervention-APV/:id' , component:InterventionApvFormComponent,canActivate:[AuthGuard] },
    {path:'intervention-APV', component:APVComponent,canActivate:[AuthGuard] },

    {path:'intervention-ABA/add', component:InterventionAbaFormComponent,canActivate:[AuthGuard] },
    {path:'intervention-ABA/:id' , component:InterventionAbaFormComponent,canActivate:[AuthGuard] },
    {path:'intervention-ABA', component:ABAComponent,canActivate:[AuthGuard] },

    {path:'intervention-AG/add', component:InterventionAgFormComponent,canActivate:[AuthGuard] },
    {path:'intervention-AG/:id' , component:InterventionAgFormComponent,canActivate:[AuthGuard] },
    {path:'intervention-AG', component:AGComponent,canActivate:[AuthGuard] },

    {path:'intervention-AM/add', component:InterventionAMFormComponent,canActivate:[AuthGuard] },
    {path:'intervention-AM/:id' , component:InterventionAMFormComponent,canActivate:[AuthGuard] },
    {path:'intervention-AM', component:AMComponent,canActivate:[AuthGuard] },

    {path:'intervention-AS/add', component:InterventionFormComponent,canActivate:[AuthGuard] },
    {path:'intervention-AS/:id' , component:InterventionFormComponent,canActivate:[AuthGuard] },
    {path:'intervention-AS', component:ASComponent,canActivate:[AuthGuard] },

    {path:'formation/add', component:FormationFormComponent,canActivate:[AuthGuard] },
    {path:'formation/:id' , component:FormationFormComponent,canActivate:[AuthGuard] },
    {path:'formation', component:FormationComponent,canActivate:[AuthGuard] },

    {path:'reunion/add', component:ReunionFormComponent,canActivate:[AuthGuard] },
    {path:'reunion/:id' , component:ReunionFormComponent,canActivate:[AuthGuard] },
    {path:'reunion', component:ReunionComponent,canActivate:[AuthGuard] },

    {path:'mission/add', component:MissionFormComponent,canActivate:[AuthGuard] },
    {path:'mission/:id' , component:MissionFormComponent,canActivate:[AuthGuard] },
    {path:'mission', component:MissionComponent,canActivate:[AuthGuard] },

    {path:'stagiaire/add', component:StagiaireFormComponent,canActivate:[AuthGuard] },
    {path:'stagiaire/:id' , component:StagiaireFormComponent,canActivate:[AuthGuard] },
    {path:'stagiaire', component:StagiaireComponent,canActivate:[AuthGuard] },

    {path:'a-faire',component:ToDoComponent,canActivate:[AuthGuard]},

    {path:'login' , component:LoginComponent},

    {path:'register/add', component:RegisterFormComponent,canActivate:[AuthGuard,AdminGuardService]},
    {path:'register/:id', component:RegisterFormComponent,canActivate:[AuthGuard,AdminGuardService]},
    {path:'register', component:RegisterComponent,canActivate:[AuthGuard,AdminGuardService]},


    {path: '**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
