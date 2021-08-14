import { Directive, ElementRef ,HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input()
  appHighlight: string = ''

  @Input()
  dfcolor:string =''



  constructor(private el: ElementRef) { 
    // el.nativeElement.style.backgroundColor= color
  }

  getHighlightColor(color:string){
    this.el.nativeElement.style.backgroundColor= color
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.getHighlightColor(this.appHighlight || this.dfcolor)
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.getHighlightColor(null)
  }


}
