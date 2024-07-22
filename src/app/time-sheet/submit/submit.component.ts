import { Component } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {
  currentDate: Date = new Date();
  rows: any[] = [
    {
      project: '',
      task: '',
      title: '',
      description: '',
      startTime: '',
      endTime: ''
    }
  ];

  addRow() {
    this.rows.push({
      project: '',
      task: '',
      title: '',
      description: '',
      startTime: '',
      endTime: ''
    });
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
  }

  reset() {
    this.rows = [
      {
        project: '',
        task: '',
        title: '',
        description: '',
        startTime: '',
        endTime: ''
      }
    ];
  }

  save() {
    // Implement save functionality
  }

  changeDate(days: number) {
    this.currentDate.setDate(this.currentDate.getDate() + days);
    this.currentDate = new Date(this.currentDate); // To trigger change detection
  }
}
