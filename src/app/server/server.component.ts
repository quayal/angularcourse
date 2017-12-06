import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverState: string = '';

  constructor() {
    this.serverState = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getColour(){
    return this.serverState === 'offline' ?  'red' :  'green';
  }

  getClass(){
    return this.serverState;
  }

}
