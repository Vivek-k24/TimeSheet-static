import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitComponent } from './time-sheet/submit/submit.component';
import { ApproveComponent } from './time-sheet/approve/approve.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';

const routes: Routes = [
  { path: '', redirectTo: '/time-sheet/submit', pathMatch: 'full' },
  {
    path: 'time-sheet',
    component: TimeSheetComponent,
    data: { breadcrumb: 'Time Sheet' },
    children: [
      { path: 'submit', component: SubmitComponent, data: { breadcrumb: 'Submit' } },
      { path: 'approve', component: ApproveComponent, data: { breadcrumb: 'Approve' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
