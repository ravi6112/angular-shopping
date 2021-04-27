import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  showPara = false;
  itemsArray = [];
  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.showPara = !this.showPara;
    this.itemsArray.push(new Date());
  }

  getColor(item: number) {
    return item >= 5 ? "blue":"transparent";
  }
}