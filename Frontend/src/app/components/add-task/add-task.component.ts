import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskService} from '../../services/task.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Task } from '../../models/taskModel';
import {AlertService} from '../../services/alert-service.service';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
  taskForm!: FormGroup;
  isEdit = false;
  taskId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: [''],
      status: ['TO_DO', Validators.required]
    });

    this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      this.isEdit = true;
      this.taskService.getTask(this.taskId).subscribe(task => {
        this.taskForm.patchValue(task);
      });
    }
  }

  onSubmit(): void {
    if (this.taskForm.invalid) return;

    const task: Task = this.taskForm.value;
    const request = this.isEdit
      ? this.taskService.updateTask(this.taskId!, task)
      : this.taskService.createTask(task);

    request.subscribe(() => {
      this.alertService.successAlert(this.isEdit ? 'Task Edited!': 'Task Created!', this.isEdit ? 'Your task edit successfully.': 'Your task has been created successfully.');
      this.router.navigate(['/list'])
    }
  );
  }

  taskList(){
    this.router.navigate(['/list']);
  }

  cancelEdit(){
    this.alertService.confirmDialog('Are you sure?', '', true)
      .then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/list'])
        }
      });
  }
}
