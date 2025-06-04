import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Router} from '@angular/router';
import {Task} from '../../models/taskModel';
import {AlertService} from '../../services/alert-service.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router, private alertService: AlertService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(id: string): void {
    this.alertService.confirmDialog('Are you sure?', 'This will delete the task permanently!', true)
      .then((result) => {
        if (result.isConfirmed) {
          this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
        }
      });
  }

  editTask(id: string): void {
    this.router.navigate(['/edit', id]);
  }

  addTask(): void {
    this.router.navigate(['/create']);
  }
}
