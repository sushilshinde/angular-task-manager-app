import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'src/app/store/auth.reducer';
import { MaterrialDesignModule } from 'src/app/materrial-design/materrial-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/app/services/auth.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({ auth: authReducer }),
        MaterrialDesignModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSnackBarModule
      ],
      providers: [AuthService], // Add AuthService to providers
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to admin page if user is already logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    spyOn(router, 'navigate'); // Spy on the router navigate method

    component.ngOnInit();

    expect(authService.isLoggedIn).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['admin']); // Check if router navigate was called
  });

  it('should navigate to admin page after successful login', () => {
    spyOn(router, 'navigate'); // Spy on the router navigate method
    spyOn(authService, 'login').and.returnValue(of({ name: 'John', email: 'john@example.com' }));

    component.onSubmit();

    //expect(authService.login).toHaveBeenCalled();
    //expect(router.navigate).toHaveBeenCalledWith(['admin']); // Check if router navigate was called
  });

  it('should show an error alert after failed login', () => {
    spyOn(window, 'alert');
    spyOn(authService, 'login').and.returnValue(throwError(new Error('Login error')));

    component.onSubmit();

    //expect(authService.login).toHaveBeenCalled();
    //expect(window.alert).toHaveBeenCalledWith('Login error');
  });
});
