import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private _router: Router) { }
  // place below into above () above once tha app-routing module is updated
  // private _router: Router

  ngOnInit() {
  }

  aboutSubmit() {
    this._router.navigate(['about']);
  }

  travelSubmit() {
    this._router.navigate(['travel']);
  }

}
