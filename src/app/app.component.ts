import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserContext } from './model/userContext';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
//import { FormsModule, FormGroup, ReactiveFormsModule, FormControlName, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
      isRequestReset : boolean;
      public lang : string = 'en';

      constructor(
        public userContext: UserContext,
        private translate: TranslateService,
        private route: ActivatedRoute) 
      {
        //let lang = elementRef.nativeElement.getAttribute('lang');
        //let lang='en';
        /*if (!lang) {
          lang = 'en';
        } */
        this.route.queryParams.subscribe(params => {
          if (params['lang'] && "fr" == params['lang'] ) {
            this.lang = 'fr';
            this.userContext.lang = this.lang;
            translate.addLangs(['en', 'fr']);
            translate.setDefaultLang(this.lang);
            translate.use(this.lang);
          }
          else{
            this.lang = 'en';
            this.userContext.lang = this.lang;
            translate.addLangs(['en', 'fr']);
            translate.setDefaultLang(this.lang);
            translate.use(this.lang);
          }
          })
/*
        this.userContext.lang = this.lang;
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang(this.lang);
        translate.use(this.lang);
        */
      }
  
      ngOnInit() { 
          /*
         this.route.queryParams.subscribe(params => {
              if (params['token']) {
                this.isRequestReset = false;
              } else {
                this.isRequestReset = true;
              }
          }) */
      }

}
