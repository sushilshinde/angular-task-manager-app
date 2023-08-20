import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from 'src/app/new-task/new-task.component';
import { Store } from '@ngrx/store';

import * as AuthActions from 'src/app/store/auth.actions';
import { selectLoggedInUser } from 'src/app/store/auth.selectors';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent {

  loginTime: Date | null; // Initialize as null
  loggedInUser$ = this.store.select(selectLoggedInUser);

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

  constructor(
    private auth: AuthService,
    private router: Router,
    private dialogRef: MatDialog,
    private store: Store
  ) {
    this.loginTime = auth.getLoginTime(); // Initialize loginTime
    this.loggedInUser$.subscribe(user => {
      console.log('Logged In User:', user);
    });
  }
 

  logout(): void {
    this.auth.logout();
    this.store.dispatch(AuthActions.isLogout());
  }

  addNewTask() {
    this.dialogRef.open(NewTaskComponent);
  }
}
