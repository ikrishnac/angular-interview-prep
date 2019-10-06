import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  private time = new Observable(observable => {
    setInterval(() => observable.next(new Date().toString()));
  });


  ngOnInit() {
    this.promiseTest();
  }


  private promiseTest() {
    const promise = new Promise((resolve, reject) => {
      if(true) {
        setTimeout(()=> {
          resolve('promise resloved');
        }, 3000);
      } else {
        setTimeout(()=> {
          reject('promise rejected');
        }, 3000);
      }
    });

    promise.then((res) => {
      console.log(res);
    }).catch((res) => {
      console.log(res);
    });  
  }
}
