import { Component, OnInit } from '@angular/core';

// Services
import { AgencyService } from '../../services/agency.service';
import { Agency } from '../../models/agency';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {
  agencyList: Agency[];
  constructor(private agencyService: AgencyService,
              private toastrService: ToastrService
    ) {}

  ngOnInit() {
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
}
