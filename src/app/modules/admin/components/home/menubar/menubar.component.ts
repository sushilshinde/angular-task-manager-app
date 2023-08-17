import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { userLogout } from 'src/app/store/task.action';



@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent {

  loginTime: Date | null; // Initialize as null

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

  constructor(private auth: AuthService, private store: Store) {
    this.loginTime = auth.getLoginTime(); // Initialize loginTime
  }

  // logout(): void {
  //   this.auth.logout();
  // }

  logout(): void {
    this.auth.logout();
    this.store.dispatch(userLogout());
  }
}
