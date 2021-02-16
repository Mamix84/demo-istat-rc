import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { GraficoLineeComponent } from './grafico-linee/grafico-linee.component';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, GraficoLineeComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    FormsModule,
    PanelModule,
    ChartModule,
    ToastModule,
    TieredMenuModule,
    DropdownModule,
    BreadcrumbModule,
  ],
  exports: [HeaderComponent, FooterComponent, GraficoLineeComponent, BreadcrumbComponent],
})
export class SharedModule {}
