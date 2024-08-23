import { ChangeDetectionStrategy, Component,ViewEncapsulation } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
    MatTableModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  countries: any;
  TableData: { username: string; type: string; dur: string }[] = [];
  selectedWorkoutType: string = '';
  selectedUsername: any = '';
  selectedDuration: any = '';

  workoutTypes: string[] = [
    'Swimming',
    'Hiking',
    'Cycling',
    'Running',
    'Circuit-training',
  ];
  onSort($event: Event) {
    throw new Error('Method not implemented.');
  }
  dataSource: any;
  addWorkout() {
    console.log('Selected Workout Type:', this.selectedWorkoutType);

    const obj = {
      username: this.selectedUsername,
      type: this.selectedWorkoutType,
      dur: this.selectedDuration,
    };
    this.TableData.push({
      username: this.selectedUsername,
      type: this.selectedWorkoutType,
      dur: this.selectedDuration,
    });
  }
  delete(i: number) {
    const obj = {
      username: this.selectedUsername,
      type: this.selectedWorkoutType,
      dur: this.selectedDuration,
    };
    this.TableData.splice(i, 1);
  }
}
