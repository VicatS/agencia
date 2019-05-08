import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { ReportAgenciesComponent } from './reports/report-agencies/report-agencies.component';




const ROUTES: Routes = [
  { path: '', component: AgenciesComponent },
  { path: 'agencies', component: AgenciesComponent },
  { path: 'report-agencies', component: ReportAgenciesComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
