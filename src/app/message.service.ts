import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root',
})
export class MessageService {
 messages: string[] = [];
 errors : string[] = [];
 title : string = "Errors";
 wait : boolean;

 setTitle(title: string) {
   this.title = title;
 }
 
 add(message: string) {
   this.messages.push(message);
 }

 clearAndAdd(message: string) {
  this.clear()
  this.messages.push(message);
}

 clear() {
  this.wait = false;
  this.messages = [];
 }

 addError(error : string) {
   this.errors.push(error);   
 }

 clearAndAddError(error : string) {
   this.clearError();
   this.errors.push(error);
 }

 clearError() {
  this.wait = false;
  this.errors = [];
 }

 clearAll() {
   this.clearError();
   this.clear();
 }
}