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

// firebase
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

// services
import { AgencyService } from './services/agency.service';
import { AgenciesComponent } from './components/agencies/agencies.component';

@NgModule({
  declarations: [AppComponent, ModalComponent, AgenciesComponent],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // importante
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPrintModule,
    ExportAsModule
  ],
  providers: [AgencyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
