import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  // main topic buttons inside of shapes
  topicOne(){
    this._router.navigate(['']);
  }

  topicTwo(){
    this._router.navigate(['']);
  }

  topicThree(){
    this._router.navigate(['']);
  }
}
