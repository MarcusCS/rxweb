import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { User } from './user.model';

@Component({
    selector: 'app-creditCard-creditCardTypes',
    templateUrl: './credit-card-credit-card-types.component.html'
})
export class CreditCardCreditCardTypesComponent implements OnInit {

    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        let user = new User();
        this.userFormGroup = this.formBuilder.formGroup(user);
    }
}
