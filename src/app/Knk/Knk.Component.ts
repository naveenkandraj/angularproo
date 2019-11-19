import { Component } from '@angular/core'
@Component({
  selector: "app-Knk",
  templateUrl: "./Knk.Component.html"
})
export class KnkComponent {
  status: boolean = false;
  //property: string = 
  prop: string = "visible";
  butt: string = "visible";
  front_event() {
    //alert(">>>>>>>>>>>>>>>>>>>>>>>...........!");
    this.status = true;
    //return true;
  }
  getprop() : void {
    
    this.prop = "hidden";
  }
  getbutt():void {
    this.butt = "hidden";
  }
  some() {
    if (this.prop == "visible" && this.butt == "visible") {
      this.getbutt();
      this.getprop();
    }
    else {
      this.butt = "visible";
      this.prop = "visible";
    }
  }
}
