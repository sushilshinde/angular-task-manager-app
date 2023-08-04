import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterrialDesignModule } from 'src/app/materrial-design/materrial-design.module';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterrialDesignModule,
  ]
})
export class AdminModule { }
