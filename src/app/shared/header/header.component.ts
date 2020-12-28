import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items =  [{
      label: 'HOME',
      icon: '',
      routerLink: ['/']
    },{
      label: 'VISUALIZZA STORICO',
      icon: 'pi pi-table',
      routerLink: ['/visualizza-storico']
    },{
      label: 'STATISTICHE',
      icon: 'pi pi-list',
      routerLink: ['/statistiche']
    },{
      label: 'GRAFICI',
      icon: 'pi pi-chart-line',
      routerLink: ['/grafici']
    },{
      label: 'AGGIORNA STORICO',
      icon: 'pi pi-pencil',
      routerLink: ['/aggiorna-storico']
    },{
      label: 'CONFRONTA COMUNI',
      icon: 'pi pi-pencil',
      routerLink: ['/confronta-comuni']
    },]
  }

}
