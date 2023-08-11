export interface TasksDb {
  category: string,
  tasks: Task[]
  }
  
  export interface Task {
    priority: string
    title: string
    class: string
    comments: string[]
    avatar: string
  }