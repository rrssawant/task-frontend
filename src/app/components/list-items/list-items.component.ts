import { Component, OnInit } from '@angular/core';
import { MainService } from './../../services/main.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  constructor(private mainService: MainService) { }
  listData = []
  
  ngOnInit() {
    
    this.listData = JSON.parse(localStorage.getItem('data')) === null ? [] :  JSON.parse(localStorage.getItem('data'))  
  }
}
