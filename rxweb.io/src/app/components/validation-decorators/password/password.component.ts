import { Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PasswordCompleteComponent } from '../../../../assets/examples/reactive-form-validators/decorators/password/complete/password-complete.component';
import { PasswordDynamicComponent } from '../../../../assets/examples/reactive-form-validators/decorators/password/dynamic/password-dynamic.component';
import { DisqusComponent } from '../../shared/disqus/disqus.component';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { TitleCasePipe } from "@angular/common";

@Component({
  templateUrl: './password.component.html',
  entryComponents: [
  	PasswordCompleteComponent,
   	PasswordDynamicComponent,
   DisqusComponent
  ]
})
export class PasswordComponent implements OnInit {
  showComponent: boolean = false;
  options: any = { responseType: 'text' };
  codeContent:any = {};
  sidebarLinks:any = {"When to use":null,"Basic password Validation":null,"PasswordConfig":["message","validation"],"Complete password Example":null,"Dynamic password Example":null};
  tab_1:string = "basicadd";
   tab_2:string = "messageModel";
   tab_3:string = "validationModel";
   tab_4:string = "completeExample";
   tab_5:string = "dynamicExample";
   
  constructor(
    private http: HttpClient   ,private titlecasePipe:TitleCasePipe
  ) {
  }
  ngOnInit(): void {
	this.http.get('assets/examples/reactive-form-validators/decorators/password/password.json',this.options).subscribe((response:object) => {
      this.codeContent = JSON.parse(response.toString());
	  let splitedArray = location.pathname.split('/');
	  if(splitedArray[2] != undefined)
		document.title = this.titlecasePipe.transform(splitedArray[2]) + " : " + this.titlecasePipe.transform(splitedArray[1])
	  else
		document.title = splitedArray[1] ? this.titlecasePipe.transform(splitedArray[1]) : "RxApp"
	  this.showComponent = true;
    })
  }
  scrollTo(section) {  
    var node = document.querySelector(section);
    node.scrollIntoView(true);
    var scrolledY = window.scrollY;
    if(scrolledY){
      window.scroll(0, scrolledY - 62);
    }
	return false;
  }
}
