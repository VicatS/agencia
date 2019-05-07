import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

// Services
import { AgencyService } from '../../services/agency.service';
import { Agency } from '../../models/agency';
import { ToastrService } from 'ngx-toastr';

declare var $;

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {
  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementId: 'printSection', // the id of html/table element
    options: {
      // html-docx-js document options
      orientation: 'landscape',
      color: 'white',
      background: 'white',
      margins: {
        top: '20'
      }
    }
  };

  agencyList: Agency[];
  constructor(
    private agencyService: AgencyService,
    private toastrService: ToastrService,
    private exportAsService: ExportAsService
  ) {}

  @ViewChild('printSection') content: ElementRef;

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

  onEdit(agency: Agency) {
    this.agencyService.selectedAgency = Object.assign({}, agency);
  }

  onDelete($key: string) {
    if (confirm('Are you sure you want to delete it')) {
      this.agencyService.deleteAgency($key);
      this.toastrService.success('Successfull Operation', 'Agency deleted');
    }
  }

  public exportPDF() {
    console.log('Exporting ready');
    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': (element, renderer) => {
        return true;
      }
    };
    const content = this.content.nativeElement;
    doc.fromHTML(content.innerHtml, 15, 15, {
      width: 190,
      elementHandlers: specialElementHandlers
    });
    doc.text('Listado de agencias', 15, 15);
    doc.save('agencias.pdf');
  }

  export() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, 'Listado de Agencias');
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    this.exportAsService.get(this.exportAsConfig).subscribe(content => {
      console.log(content);
    });
  }
}
