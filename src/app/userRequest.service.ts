import { Injectable } from '@angular/core';
import {Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse }  from '@angular/common/http';
import {MessageService} from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import {UserContext} from './model/userContext'
//import {UserManHttpEventHandlerService} from './user-man-http-event-handler.service'

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  userRequestURL  = "/UserRequestRestService/rest/userRequestService"
  //passwordResetURL = "/UserManagementRestService/rest/userman/resetPassword"
  userContext : UserContext;
  constructor( private http: HttpClient, private messageService: MessageService) { }
  response: Observable<any>;
  public fixURL(url) {
		if (url.indexOf('http') < 0) {
            let origin = window.location.origin;
            let pathname = window.location.pathname;
            url = origin + url;
            if (url.indexOf('undefined') > -1) {
                url = url.replace('undefined', '');
            }
		}
		return url;
  }
  userRequest(userContext : UserContext) : Observable<any>{      
    let url = this.fixURL(this.userRequestURL);   
    this.response = this.http.post(url, userContext);
    this.response.subscribe(res => {     
      this.messageService.setTitle("Request Submitted"); 
      this.messageService.clearAndAdd("You will receive an email with instructions shortly.");

    },
    (err: HttpErrorResponse) => {
      //this.httpErroHander.handleHttpError(err);
    });
    return this.response;
  }
  
  private log(message: string) {
    this.messageService.add("UserRequestService: ${message}");
  }

  private handleError<T> (operation = 'operation', result?: T) {
    {debugger}
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } 
}
