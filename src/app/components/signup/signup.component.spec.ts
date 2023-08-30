import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { MaterrialDesignModule } from 'src/app/materrial-design/materrial-design.module';
import { AuthService } from 'src/app/services/auth.service';
import { authReducer } from 'src/app/store/auth.reducer';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ auth: authReducer }),
        MaterrialDesignModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        
      ]
    });
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form initially', () => {
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('should require name field', () => {
    const nameControl = component.signupForm.get('name');
    nameControl?.setValue('');
    expect(nameControl?.hasError('required')).toBeTruthy();
  });

  it('should require a valid email', () => {
    const emailControl = component.signupForm.get('email');
    emailControl?.setValue('invalidemail');
    expect(emailControl?.hasError('email')).toBeTruthy();
  });

  it('should require password of minimum length', () => {
    const passwordControl = component.signupForm.get('password');
    passwordControl?.setValue('pass');
    expect(passwordControl?.hasError('minlength')).toBeTruthy();
  });

  it('should match password and confirm password', () => {
    const passwordControl = component.signupForm.get('password');
    const cnfPasswordControl = component.signupForm.get('cnf_password');

    passwordControl?.setValue('password');
    cnfPasswordControl?.setValue('differentpassword');

    expect(component.signupForm.hasError('passwordMismatch')).toBeTruthy();
  });

  // // Test form submission and API interaction
  // it('should submit the form and call register API', () => {
  //   const authService = TestBed.inject(AuthService);
  //   const mockUser = { name: 'Test User', email: 'test@example.com', password: 'password', cnf_password: 'password' };
  //   const registerSpy = spyOn(authService, 'register').and.returnValue(of(mockUser));

  //   component.signupForm.setValue(mockUser);
  //   component.onSubmit();

  //   expect(registerSpy).toHaveBeenCalledWith(mockUser);
  //   expect(component.signupForm.valid).toBeTruthy();
  //   // Add more expectations based on your component behavior
  // });
});
