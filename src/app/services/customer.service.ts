import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  userCollection: AngularFirestoreCollection<Customer>;
  customers: Observable<Customer[]>;
  customerDoc: AngularFirestoreDocument<Customer>;

  constructor(public afs: AngularFirestore) {
    this.customers = this.afs.collection('users').valueChanges();
  }

  getCustomers() {
    return this.customers;
  }

  addCustomer(customer: Customer) {
    this.afs.collection('users').add(customer);
  }

  updateCustomer(customer: Customer) {
    this.afs.doc('users/' + customer.key).update(customer);
  }

  deleteCustomer(customer: Customer) {
    this.afs.doc('users/' + customer).delete();
  }

}
