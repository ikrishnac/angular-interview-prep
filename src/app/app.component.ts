import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  private time = new Observable(observable => {
    setInterval(() => observable.next(new Date().toString()), 1000);
  })
}
