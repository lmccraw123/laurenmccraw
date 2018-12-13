import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  // TravelSubmit() {
  //   this._router.navigate(['travel']);
  // }
}
