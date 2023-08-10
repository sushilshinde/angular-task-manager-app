import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  private bgcolor(color: string|null) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private txtcolor(color: string|null) {
    this.el.nativeElement.style.color = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.bgcolor('white'); // Change the background color to yellow
    this.txtcolor('black'); // Change text color to black
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgcolor(null); // Remove the background color
    this.txtcolor(null); // Remove the text color
  }

  
}
