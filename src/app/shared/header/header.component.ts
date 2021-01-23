import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'HOME',
        icon: '',
        routerLink: ['/'],
      },
      {
        label: 'STATISTICHE POPOLAZIONE - COMUNI SINGOLI',
        icon: '',
        items: [
          {
            label: 'VISUALIZZA STORICO',
            icon: 'pi pi-table',
            routerLink: ['/visualizza-storico'],
          },
          {
            label: 'STATISTICHE',
            icon: 'pi pi-list',
            routerLink: ['/statistiche'],
          },
          {
            label: 'GRAFICI POPOLAZIONE',
            icon: 'pi pi-chart-line',
            routerLink: ['/grafici'],
          },
          {
            label: "POPOLAZIONE ETA' SCOLARE",
            icon: 'pi pi-book',
            routerLink: ['/eta-scolare'],
          },
        ],
      },
      {
        label: 'STATISTICHE POPOLAZIONE - COMUNI MULTIPLI',
        icon: '',
        items: [
          {
            label: 'CONFRONTO STATISTICHE',
            icon: 'pi pi-list',
            routerLink: ['/statistiche-popolazione-multipli'],
          },
          {
            label: 'CONFRONTO GRAFICI POPOLAZIONE',
            icon: 'pi pi-chart-line',
            routerLink: ['/confronta-comuni'],
          },
          {
            label: "CONFRONTO ETA' SCOLARE",
            icon: 'pi pi-book',
            routerLink: ['/eta-scolare-popolazione-multipli'],
          },
        ],
      },
      {
        label: 'BILANCIO DEMOGRAFICO - COMUNI SINGOLI',
        icon: '',
      },
      {
        label: 'BILANCIO DEMOGRAFICO - COMUNI MULTIPLI',
        icon: '',
      },
      {
        label: 'STATISTICHE AREA',
        icon: '',
      },
    ];
  }
}
