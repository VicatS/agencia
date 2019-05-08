import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

// services
import { AgencyService } from '../../../services/agency.service';
import { ToastrService } from 'ngx-toastr';
import { Agency } from 'src/app/models/agency';


@Component({
  selector: 'app-modal-enabled',
  templateUrl: './modal-enabled.component.html',
  styleUrls: ['./modal-enabled.component.css']
})
export class ModalEnabledComponent implements OnInit {
  agencyList: Agency[];
  constructor(
    public agencyService: AgencyService,
    private toastrService: ToastrService
  ) {}

  @ViewChild('btnClose') btnClose: ElementRef;

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

  onSubmit(enabledForm: NgForm) {
    if (enabledForm.value.$key == null) {
      this.agencyService.insertAgencies(enabledForm.value);
      this.toastrService.success(
        'Successfull Operation',
        'Successfull created'
      );
    } else {
      this.agencyService.disableAgency(enabledForm.value);
      this.toastrService.success(
        'Successfull Operation',
        'Successfull updated'
      );
      enabledForm.resetForm();
      this.btnClose.nativeElement.click();
    }
    enabledForm.resetForm();
    this.btnClose.nativeElement.click();
  }

  resetForm(enabledForm?: NgForm) {
    if (enabledForm != null) {
      enabledForm.reset();
      this.agencyService.selectedAgency = new Agency();
    }
  }
}
