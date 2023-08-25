import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { Component, DebugElement, Directive, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

// Dummy component for testing the directive
@Component({
  template: `
    <div appHighlight>This is a highlighted element.</div>
  `,
})
class TestComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement.query(By.directive(HighlightDirective));
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(new ElementRef(null)); // Provide a dummy ElementRef
    expect(directive).toBeTruthy();
  });

  it('should change background and text colors on mouseenter', () => {
    const element = debugElement.nativeElement;
    const initialBackgroundColor = element.style.backgroundColor;
    const initialTextColor = element.style.color;

    debugElement.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();

    expect(element.style.backgroundColor).toBe('white');
    expect(element.style.color).toBe('black');

    debugElement.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();

    expect(element.style.backgroundColor).toBe(initialBackgroundColor);
    expect(element.style.color).toBe(initialTextColor);
  });
});