import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator function to match password and confirm password
export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password')?.value;
    const cnfPassword = control.get('cnf_password')?.value;

    return password === cnfPassword ? null : { 'passwordMismatch': true };
  };
}

