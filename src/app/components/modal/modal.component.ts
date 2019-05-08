import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { NgForm } from '@angular/forms';

// Services
import { AgencyService } from '../../services/agency.service';
import { ToastrService } from 'ngx-toastr';
import { Agency } from 'src/app/models/agency';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(
    private agencyService: AgencyService,
    private toastrService: ToastrService
  ) {}
  @ViewChild('btnClose') btnClose: ElementRef;

  ngOnInit() {
    this.agencyService.getAgencies();
  }

  onSubmit(agencyForm: NgForm) {
    if (agencyForm.value.$key == null) {
      this.agencyService.insertAgencies(agencyForm.value);
      this.toastrService.success(
        'Successfull Operation',
        'Successfull created'
      );
    } else {
      this.agencyService.updateAgency(agencyForm.value);
      this.toastrService.success(
        'Successfull Operation',
        'Successfull updated'
      );
      agencyForm.resetForm();
      this.btnClose.nativeElement.click();
    }
    agencyForm.resetForm();
    this.btnClose.nativeElement.click();
  }

  resetForm(agencyForm?: NgForm) {
    if (agencyForm != null) {
      agencyForm.reset();
      this.agencyService.selectedAgency = new Agency();
    }
  }
}
