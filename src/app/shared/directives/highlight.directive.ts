import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = "";

  constructor(private el: ElementRef) {
    // similar document.getElement()
     this.el.nativeElement.style.backgroundColor ="yellow";
   }
  //  click, change, keyup, blur, keydon, mouseenter, mouseleave 
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight ? this.appHighlight : 'red');
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
   }

   private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor =color;
   }

}
