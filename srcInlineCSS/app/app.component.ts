import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  h3{
    color: blue
  }
  h1{
    color: red
  }
  `]
})
export class AppComponent {
  title = 'app';
}
