import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CunsulationTimeComponent } from './cunsulation-time/cunsulation-time.component';
import { MedicalFeeComponent } from './medical-fee/medical-fee.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from '../app/auth.guard'


const routes: Routes = [
  { path: '', component: CunsulationTimeComponent,canActivate: [AuthGuard] },
  { path: 'insurance', component: InsuranceComponent, canActivate: [AuthGuard]},
  { path: 'login/:id', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
