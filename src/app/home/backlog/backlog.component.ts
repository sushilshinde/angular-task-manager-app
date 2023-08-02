import { Component } from '@angular/core';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent {

  backlog_users = [
    {
      priority: 'Low Priority',
      title: 'Company website redesign',
      class: 'low-priority',
      comments:[
        'good work'
      ],
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
    },
    {
      priority: 'Medium Priority',
      title: 'Mobile app login process prototype',
      class: 'medium-priority',
      comments:[
        'nice',
        'good work'
      ],
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
    },
    {
      priority: 'High Priority',
      title: 'Onboarding designs',
      class: 'high-priority',
      comments:[
        'nice'
      ],
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
    },

  ]

}
