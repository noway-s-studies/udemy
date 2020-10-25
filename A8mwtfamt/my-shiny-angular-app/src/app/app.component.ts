import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [`
    h1 {color:blue};
    `],
  providers: [ ],
  animations: [
    trigger("openClose", [
      state(
        "open",
        style({
          height: "200px",
          backgroundColor: "green",
        })
      ),
      state(
        "closed",
        style({
        height: "100px",
        backgroundColor: "green",
        })
      ),
      transition("open => closed", [animate("1s")]),
      transition("closed => open", [animate("0.5s")])
    ])
  ]
})
export class AppComponent {
  title = 'my-shiny-angular-app';
  name: string = 'Robi';
  isOpen = true;
  toggle(){
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
