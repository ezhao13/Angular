import { Injectable } from '@angular/core';
import {MessageService} from './message.service';
import { HttpErrorResponse }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserManHttpEventHandlerService {

  constructor(private messageService : MessageService) { }

  handleHttpError(err: HttpErrorResponse){
    if (err.status == 404) {
      this.messageService.setTitle("Incorrect email address entered");
      this.messageService.clearAndAddError("Please check the email address entered to ensure it is valid. If you continue to receive an error after you ensure typographical errors have been corrected, report the issue to enviropermisions@ontario.ca.")
    } else if (err.status == 500) {
      this.messageService.setTitle("Incorrect email address entered");
      this.messageService.clearAndAddError("Please check the email address entered to ensure it is valid.")
    }
    console.log(err.error);
    console.log(err.message);
    
  }  
}
