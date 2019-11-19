import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-naveen',
  templateUrl: './naveen.component.html',
  styleUrls: ['./naveen.component.css']
})
export class NaveenComponent implements OnInit {
  allowNewServer = false;
  serverId: number = 10;
  serverstatus: string = "";
  serveradd: string = "no server added";
  server_Status= false;
  serverName: string ="";
  constructor() {
    setTimeout(() => { this.allowNewServer = true; },2000)
    this.serverstatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serveradd = "server added succesfuly";
    this.server_Status=true;
    this.serverName= this.serverName + "AFter server addition";
  }
  getColor()
  {
    return this.serverstatus === 'online' ? 'red' : 'blue';
    }
}
