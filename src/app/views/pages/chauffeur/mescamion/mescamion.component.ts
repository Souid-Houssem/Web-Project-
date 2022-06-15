import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";
@Component({
  selector: 'app-mescamion',
  templateUrl: './mescamion.component.html',
  styleUrls: ['./mescamion.component.scss']
})
export class MescamionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

}
