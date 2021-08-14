import { Directive, ElementRef ,HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input()
  appHighlight: string = ''

  constructor(private el: ElementRef) { 
    // el.nativeElement.style.backgroundColor= color
  }

  getHighlightColor(color:string){
    this.el.nativeElement.style.backgroundColor= color
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.getHighlightColor(this.appHighlight)
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.getHighlightColor("cyan")
  }


}
