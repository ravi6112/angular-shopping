import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    console.log('insidne the toggleOpen function');
    this.isOpen = !this.isOpen;
  }
  constructor() { }

}