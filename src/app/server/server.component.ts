import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-server]', Selector as an attribute
  // selector: '.app-server', Selector as a class 
// selector: 'app-server', Selector as a string
  selector: 'app-server', 
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  }

firstName = 'My Name is server'


}
