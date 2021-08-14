import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { 
    // el.nativeElement.style.backgroundColor="yellow"
  }

  getHighlightColor(color:string){
    this.el.nativeElement.style.backgroundColor= color
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.getHighlightColor("orange")
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.getHighlightColor("cyan")
  }


}
