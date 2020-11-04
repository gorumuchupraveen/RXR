import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: ' [appDefaultTheme] '
})

export class DefaultThemeDirective implements OnInit {
    constructor(private elementRef: ElementRef) {

    }
    ngOnInit() {
        this.elementRef.nativeElement.style.color = 'rgb(255 2 2)';
    }

}