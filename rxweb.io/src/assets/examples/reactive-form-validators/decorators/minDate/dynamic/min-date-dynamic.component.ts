import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormBuilderConfiguration,
} from '@rxweb/reactive-form-validators';

import { User } from './user.model';

@Component({
    selector: 'app-minDate-dynamic',
    templateUrl: './min-date-dynamic.component.html'
})
export class MinDateDynamicComponent implements OnInit {

    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        let user = new User();
        let formBuilderConfiguration = new FormBuilderConfiguration();
        formBuilderConfiguration.dynamicValidation = {
			
			birthDate : {
				minDate :  {value:new Date(2018,7,30),conditionalExpression:(x,y) =>{ return  x.userName == "John" },} 
			},
						
			admissionDate : {
				minDate :  {value:new Date(2018,7,30),conditionalExpression:x => x.userName == "John",} 
			},
						
			registrationDate : {
				minDate :  {value:new Date(2018,7,30),message:'{{0}} exceeds the Minimum Date Limit',} 
			},
			        };
		this.userFormGroup = this.formBuilder.formGroup(user,formBuilderConfiguration);
    }
}
