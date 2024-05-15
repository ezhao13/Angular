import { Component, OnInit, OnChanges, ViewChild, Output, EventEmitter } from '@angular/core';
//import { BsModalComponent } from 'ng2-bs3-modal';

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirm-dialog.component.html'
})

export class ConfirmDialogComponent implements OnInit, OnChanges {
    title: string;
    content: string;
    cancelButton: string;
    confirmButton: string;
    object: any;
    cssClass: string;
    @Output() onClose = new EventEmitter<any>();
    //@ViewChild('confirmModal') modal: BsModalComponent;

    constructor() { 
    }

    ngOnInit() {
    }

    ngOnChanges(changes: any) {
    }

    setCssClass(css: string) {
        this.cssClass = css;
    }

    openModal(title: string, content: string, cancelButton: string, confirmButton: string, css: string, object: any) {
        this.title = title;
        this.content = content;
        this.cancelButton = cancelButton;
        this.confirmButton = confirmButton;
        this.object = object;
        this.cssClass = (css != null ? css : "modal-width-70");
       // this.modal.open();
    }

    closeModal(callback: boolean) {
        if (callback) {
            this.onClose.emit(this.object); 
        }
       // this.modal.close();
    }

}
