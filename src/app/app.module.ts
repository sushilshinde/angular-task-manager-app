import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { allTasksReducer } from './store/all-tasks/all-tasks.reducer';
import { allTasksEffects } from './store/all-tasks/all-tasks.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { taskReducer } from './store/task.reducer';





@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BacklogComponent,
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
        FormsModule,
        StoreModule.forRoot({ auth: authReducer ,tasks: allTasksReducer}), // Include your reducer
        EffectsModule.forRoot([AuthEffects, allTasksEffects]), // Include your effects (if needed)
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }