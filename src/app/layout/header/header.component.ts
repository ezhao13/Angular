import { Component, OnInit } from '@angular/core';

import { UserContext } from 'src/app/model/userContext';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  })

export class HeaderComponent implements OnInit {
  constructor(public context: UserContext) {
  }

  ngOnInit() {
   
  }
}
