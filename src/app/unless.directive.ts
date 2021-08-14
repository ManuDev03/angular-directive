import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView= false

  constructor(private ref:TemplateRef<any>,private vf:ViewContainerRef) { }
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.vf.createEmbeddedView(this.ref);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.vf.clear();
      this.hasView = false;
    }
  }
}
