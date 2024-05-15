import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../layout/confirm-dialog/confirm-dialog.component';
import { UserContext } from '../../model/userContext';
import { environment } from '../../../environments/environment';
import {FormsModule, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  animations: [
    trigger(
        'enterAnimation', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('400ms', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate('300ms', style({ opacity: 0 }))
            ])
        ]
    ),
    trigger('slideInOut', [
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('500ms ease-in', style({ transform: 'translateY(-0%)' }))
        ]),
        transition(':leave', [
            animate('500ms ease-in', style({ transform: 'translateY(100%)' }))
        ])
    ])
]
})

export class MainLayoutComponent implements OnInit {
  @ViewChild(ConfirmDialogComponent) confirmDialog: ConfirmDialogComponent;
  _opened = false;
  maxHeight = false;

   constructor(private translate: TranslateService,
    public context: UserContext,
    private router: Router) {
  }

  ngOnInit() {
    //this.context.botApiURL = environment.botApiURL;
    const hostName = document.location.hostname;
    if ( hostName === 'wwwdev.gov.on.ca' || hostName === 'wwwstage.gov.on.ca' ) {
      // do nothing, prepare for different value if it's provided, otherwise, use the default value in context
    } else if ( hostName === 'intra.stage.gov.on.ca' ) {
  //this.context.botToken = environment.botToken;
  ;
    } else {
      ;
      //this.context.botToken = environment.botToken;
    }
    
  }

  onMouseEnter(event) {
    event.currentTarget.focus();
  }   

  onCancel(event) {  
    if(event && event === 'summary'){
      this.confirmDialog.openModal(
        this.translate.instant('pep.cancelDialog.title'),
        this.translate.instant('pep.cancelDialog.content'),
        this.translate.instant('pep.cancelDialog.no'),
        this.translate.instant('pep.cancelDialog.yes'),
        "modal-width-50", 
        'cancelApplication');    

    }else{
      this.confirmDialog.openModal(
        this.translate.instant('pep.cancelDialog.title'),
        this.translate.instant('pep.cancelDialog.content1'),
        this.translate.instant('pep.cancelDialog.no'),
        this.translate.instant('pep.cancelDialog.yes'),
        "modal-width-50", 
        'cancelApplication');    

    }
    
  }

  closeConfirmDialog(event) {
    window.onbeforeunload = null;
    if(event){
      this.router.navigate([this.translate.instant('pep.cancelUrl')]); 
      this.context.reset();
    }
    
  } 
  
  public _toggleSidebar() {
    this._opened = !this._opened;
    if (!this._opened) {
      this.maxHeight = false;
    }
    return false;
  }

  public _toggleHeight() {
    this.maxHeight = !this.maxHeight;
  }

  public isSideNavOpened() {
    return this._opened;
  }

  public setProgressBarStyles() {
    //const progressWidth = this.context.percentageCompleted + '%';
    const progressWidth = '10%';
    const styles = {
        'width': progressWidth
    };
    return styles;
}

}
