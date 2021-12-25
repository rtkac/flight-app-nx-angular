import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'flight-app';
  a = this.comme('a', 'b');

  comme(a: string, b: any) {
    return `${a} ${b}`;
  }
}
