import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.css']
})
export class InputItemComponent implements OnInit {

  @Output() listData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addItem(inputItem: string) {
    this.listData.emit(inputItem);
  }
}