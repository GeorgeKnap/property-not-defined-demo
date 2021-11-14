import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './base/base.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    this.foo = true;
  }
}
