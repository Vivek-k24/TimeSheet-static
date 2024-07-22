import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SubmitComponent } from './time-sheet/submit/submit.component';
import { ApproveComponent } from './time-sheet/approve/approve.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent,
    ApproveComponent,
    TimeSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
