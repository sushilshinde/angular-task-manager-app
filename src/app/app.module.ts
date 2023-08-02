import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BacklogComponent } from './home/backlog/backlog.component';
import {
  CdkDrag,
  CdkDropList,
  CdkDragDrop,
  moveItemInArray,
  CdkDropListGroup,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BacklogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
