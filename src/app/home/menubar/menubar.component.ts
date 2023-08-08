import { Component } from '@angular/core';

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
}
