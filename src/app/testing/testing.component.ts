import { Component, OnInit } from '@angular/core';
import { KnkComponent } from '../Knk/Knk.Component';
import { products } from './products';
@Component({
  selector: 'testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  proname: string = "First application";
  pronum: number = 141225514;
  inputtxt: string;
  allowbutton: boolean;
  tagcreated: boolean = false;
  num: number = 1;
  gridData: any[] = products;
  public selectvalue: string;
  public TestItems: Array<string> = ["test1", "test2", "test3", "test4", "test5", "test6", "test7"];
  public listItems: Array<string> = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
  constructor() {
    this.allowbutton = false;
    //KnkComponent.property = "hidden"; 

  }

  ngOnInit() {
  }
  getserver() {
    //return "first application";
    this.tagcreated = true;
    setTimeout(() => { this.allowbutton = false;}, 5000);
    
    this.proname = "second application";
    this.allowbutton = true;
    this.pronum = this.pronum + this.pronum;
    
  }
  clear() {
    //this.allowbutton=true;
    //this.tagcreated = false;
    //alert("clear meothd in testing.....!" + this.num);
    return "clear meothd in testing.....!";
    //return 0;
    //this.num = this.num + 1;
  }
  someEvent() {
    alert("............................!");
  }
  selectItem() {
    alert(this.selectvalue);
  }
}
