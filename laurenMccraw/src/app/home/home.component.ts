import { Component, OnInit } from '@angular/core';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { text } from '@angular/core/src/render3/instructions';
// import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  


  constructor() { }
  // place below into above () above once tha app-routing module is updated
  // private _router: Router

  ngOnInit() {
  }

  

}
