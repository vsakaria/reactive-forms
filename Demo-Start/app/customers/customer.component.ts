import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Customer } from './customer';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})

export class CustomerComponent implements OnInit {
    customerForm: FormGroup;
    customer : Customer = new Customer();

    ngOnInit () {
        this.customerForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            email: new FormControl(),
            sendCatalog: new FormControl(true)
        });
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
 }
