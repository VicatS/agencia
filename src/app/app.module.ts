import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPrintModule } from 'ngx-print';
import { ExportAsModule } from 'ngx-export-as';

// components
import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// firebase
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

// services
import { AgencyService } from './services/agency.service';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReportAgenciesComponent } from './reports/report-agencies/report-agencies.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    AgenciesComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ReportAgenciesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // importante
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPrintModule,
    ExportAsModule,
    AppRoutingModule
  ],
  providers: [AgencyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
