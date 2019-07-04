import { Component, OnInit, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-childcompont',
  templateUrl: './childcompont.component.html',
  styleUrls: ['./childcompont.component.css']
})
export class ChildcompontComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emit(msg) {
    this.childEvent.emit(msg);
  }


}
