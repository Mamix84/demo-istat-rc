import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() items: MenuItem[];
  home: MenuItem;

  constructor() {}

  ngOnInit(): void {
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
