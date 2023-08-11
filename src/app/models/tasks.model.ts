export interface TasksDb {
  backlog_tasks: BacklogTask[]
  inprogress_tasks: InprogressTask[]
  review_tasks: ReviewTask[]
  completed_tasks: CompletedTask[]
}

export interface BacklogTask {
  priority: string
  title: string
  class: string
  comments: string[]
  avatar: string
}

export interface InprogressTask {
  priority: string
  title: string
  class: string
  comments: string[]
  avatar: string
}

export interface ReviewTask {
  priority: string
  title: string
  class: string
  comments: string[]
  avatar: string
}

export interface CompletedTask {
  priority: string
  title: string
  class: string
  comments: string[]
  avatar: string
}
