import { Injectable } from '@angular/core';
// Correct import statement
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  successAlert(title: string, text: string) {
    Swal.fire({
      title,
      text,
      icon: 'success',
      background: '#1e1e1e',
      color: '#e1e1e1',
      confirmButtonColor: '#018786',
      timer: 3000
    });
  }

  confirmDialog(title: string, text: string, showCancelButton: boolean, confirmButtonText: string = 'Yes') {
    return Swal.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: showCancelButton,
      confirmButtonColor: '#bb86fc',
      cancelButtonColor: '#f44336',
      confirmButtonText,
      background: '#1e1e1e',
      color: '#e1e1e1'
    });
  }

}
