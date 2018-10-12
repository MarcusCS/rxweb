import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder,RxwebValidators 
} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-password-complete-validator',
    templateUrl: './password-complete.component.html'
})
export class PasswordCompleteValidatorComponent implements OnInit {
    loginInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.loginInfoFormGroup = this.formBuilder.formGroup({
										newPassword:['',RxwebValidators.password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true} })], 
													oldPassword:['',RxwebValidators.password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,message:'Password is not valid' })], 
								});
    }
}
