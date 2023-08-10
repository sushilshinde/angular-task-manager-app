import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/admin/components/home/home.component';
import { BacklogComponent } from './modules/admin/components/home/backlog/backlog.component';

import {
  CdkDrag,
  CdkDropList,
  CdkDragDrop,
  moveItemInArray,
  CdkDropListGroup,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NewListComponent } from './new-list/new-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { MenubarComponent } from './modules/admin/components/home/menubar/menubar.component';
import { MaterialModule } from './material-module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { MaterrialDesignModule } from './materrial-design/materrial-design.module';
import { HighlightDirective } from './highlight.directive';
// import { HomeComponent } from './modules/admin/components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BacklogComponent,
    NewListComponent,
    NewTaskComponent,
    MenubarComponent,
    SidenavComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    HomeComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
    BrowserAnimationsModule,
    MaterialModule,
    MaterrialDesignModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}