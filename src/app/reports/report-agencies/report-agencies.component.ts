import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';

// Services
import { AgencyService } from '../../services/agency.service';
import { Agency } from '../../models/agency';


@Component({
  selector: 'app-report-agencies',
  templateUrl: './report-agencies.component.html',
  styleUrls: ['./report-agencies.component.css']
})
export class ReportAgenciesComponent implements OnInit {
  agencyList: Agency[];
  constructor(private agencyService: AgencyService) {}


  ngOnInit(): void {
    this.agencyService
      .getAgencies()
      .snapshotChanges()
      .subscribe(item => {
        this.agencyList = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          // tslint:disable-next-line:no-string-literal
          x['$key'] = element.key;
          this.agencyList.push(x as Agency);
        });
      });
  }
}
