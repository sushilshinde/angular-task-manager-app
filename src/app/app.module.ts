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
import { HighlightDirective } from './custom-directive/highlight.directive';
import { LoginTimeFormatPipe } from './custom-pipe/login-time-format.pipe';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';
//import { taskReducer } from './store/task.reducer';





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
        LoginTimeFormatPipe,
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
        StoreModule.forRoot({ auth: authReducer }), // Include your reducer
        EffectsModule.forRoot([AuthEffects]), // Include your effects (if needed)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }