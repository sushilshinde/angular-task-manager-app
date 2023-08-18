import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
//import { MaterrialDesignModule } from 'src/app/materrial-design/materrial-design.module'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private auth: AuthService) {}

  // constructor(private auth: AuthService){}

  // logout(): void{
  //   this.auth.logout()
  // }
}
