import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {

  constructor(private elem:ElementRef) {
    
   }
   @HostListener("click") onClicks(){
    this.elem.nativeElement.src='https://images.unsplash.com/photo-1576083895015-17223a61998e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';
  }

}
