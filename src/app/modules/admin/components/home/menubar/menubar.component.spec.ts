import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';

import { MenubarComponent } from './menubar.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BacklogComponent } from '../backlog/backlog.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenubarComponent', () => {
  let component: MenubarComponent;
  let fixture: ComponentFixture<MenubarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenubarComponent, 
        BacklogComponent
    ],
      imports:[
        HttpClientModule,
        MaterialModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterTestingModule
        
      ],
      providers: [
        AuthService, // Provide AuthService or use TestBed.inject(AuthService)
        provideMockStore({ initialState: {} }), // Provide a mock store
      ],
    });
    fixture = TestBed.createComponent(MenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
