import { Injectable } from '@angular/core';

// firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Agency } from '../models/agency';


@Injectable({
  providedIn: "root"
})
export class AgencyService {
  agencyList: AngularFireList<any>;
  selectedAgency: Agency = new Agency();

  constructor(private firebaseDatabase: AngularFireDatabase) {}

  getAgencies() {
    return (this.agencyList = this.firebaseDatabase.list("agencies"));
  }

  insertAgencies(agency: Agency) {
    this.agencyList.push({
      name: agency.name,
      address: agency.address,
      phones: agency.phones,
      limitDate: agency.limitDate,
      townHall: agency.townHall,
      activity: agency.activity,
      acronym: agency.acronym,
      enabled: 1
    });
  }

  updateAgency(agency: Agency) {
    this.agencyList.update(agency.$key, {
      name: agency.name,
      address: agency.address,
      phones: agency.phones,
      limitDate: agency.limitDate,
      townHall: agency.townHall,
      activity: agency.activity,
      acronym: agency.acronym
    });
  }

  disableAgency(agency: Agency) {
    this.agencyList.update(agency.$key, {
      enabled: agency.enabled
    });
  }

  deleteAgency($key: string) {
    this.agencyList.remove($key);
  }
}
