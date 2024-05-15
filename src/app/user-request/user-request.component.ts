import { Component, OnInit, Injector, OnDestroy, ViewChild} from '@angular/core';
import {FormsModule, FormBuilder, Validators, FormControl, FormGroup } from "@angular/forms";
import {UserContext} from '../model/userContext';
import {MessageService} from '../message.service';
import {UserRequestService} from '../userRequest.service';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

@Component({
  selector: 'userRequest',
  templateUrl: './user-request.component.html',
  styleUrls: ['../app.component.css']
})
export class UserRequestComponent implements OnInit {

  //appContext : AppContext;  
  //parentComponent: MainLayoutComponent;
  userForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    postalcode: new FormControl(),
 });
  /*
  userForm = this.fb.group({
    firstName: [this.userContext.firstName],
    lastName: [this.userContext.lastName],
    email: [[this.userContext.email], [Validators.required, Validators.email]],
    postalcode: [[this.userContext.postalcode], [Validators.required, Validators.length]],
}); 
*/
  constructor( public userContext: UserContext,public injector: Injector, private fb: FormBuilder, private userRequestService: UserRequestService, private messageService : MessageService) { 
    //constructor( public injector: Injector, appContext : AppContext, private userRequestService: UserRequestService, private messageService : MessageService) { 
    //this.parentComponent = injector.get(MainLayoutComponent);
    /*
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      postalcode: ['', [Validators.required, Validators.length]],
  }); */
  }

  ngOnInit() {
    this.userContext = new UserContext();
  }
  
  userSubmit() {
    this.messageService.clearAll();
    if (this.isEnabled() === 'active' && !this.messageService.wait) {
      
      if (this.validateEmail()) {
        
        this.userRequestService.userRequest(this.userContext);
      }  
      
    }  
    this.messageService.add("lang.successful");
  }
  isEnabled () : string {
    if (this.userContext.email) {
      return "active";
    } else {
      return "disabled";
    }  
  }

  validateEmail() : boolean {
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userForm.get("email").value)) {
      return true;
    }
    //this.messageService.clearAndAddError("Please enter a valid email");
    this.messageService.clearAndAddError("lang.validateemailformaterror");
    return false;
  }

  validatePostalCode() : boolean {
    if (/^(d{5}(-d{4})?|[A-Z]d[A-Z] *d[A-Z]d)+$/.test(this.userForm.get("postalcode").value)){
      return true;
      //this.enrolForm.get("mailingAddress.postalCode").setValidators([Validators.required,Validators.pattern('[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]')]);
    }
    //this.messageService.clearAndAddError("Please enter a valid postal code");
    this.messageService.clearAndAddError("lang.validatepostalcodeerror");
    return false;
  }
}
