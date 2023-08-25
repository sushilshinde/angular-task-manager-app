import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MaterrialDesignModule } from 'src/app/materrial-design/materrial-design.module';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      imports: [
        MaterrialDesignModule,
      ]
    });
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login on backToLogin()', () => {
    const router = TestBed.inject(Router); // Get the Router instance from TestBed
    const navigateSpy = spyOn(router, 'navigate'); // Spy on the navigate method

    component.backToLogin();

    expect(navigateSpy).toHaveBeenCalledWith(['login']); // Expect navigation to 'login'
  });
});
