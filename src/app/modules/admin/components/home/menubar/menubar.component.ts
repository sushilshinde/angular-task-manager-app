import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent {
  menuItems = [
    { icon: 'group', label: 'Manage', route: '' },
    { icon: 'dns', label: 'Boards', route: '' },
    { icon: 'event_note', label: 'Schedule', route: '' },
    { icon: 'assessment', label: 'Reports', route: '' },
  ];

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
<<<<<<< HEAD
  constructor(private auth: AuthService) {}
=======

  constructor(private auth: AuthService, private router: Router) {}
>>>>>>> murty

  logout(): void {
    this.auth.logout();
  }
<<<<<<< HEAD
=======

  addNewTask(){
  }
>>>>>>> murty
}
