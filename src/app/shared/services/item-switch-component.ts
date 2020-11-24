import { Component, Input } from '@angular/core';
import { Item } from '../../shared/services/items';

@Component({
    selector: 'app-google-product',
    templateUrl: `I'm a little {{item.mame}} short and stout! `
})

export class GoogleProductComponent {
    @Input() iName: Item;
}

@Component({
    selector: 'app-amazon-product',
    template: `This is {{}} Product`
})

export class AmazonProductComponent {
    @Input() iName: Item;
}

@Component({
    selector: 'app-myntra-product',
    template: `This is {{}} Product`
})

export class MyntraProductComponent {
    @Input() iName: Item;
}
@Component({
    selector: 'app-flipcart-product',
    template: `This is {{}} Product`
})

export class FlipcartProductComponent {
    @Input() iName: Item;
}
@Component({
    selector: 'app-oppo-product',
    template: `This is {{}} Product`
})

export class OppoProductComponent {
    @Input() iName: Item;
}

export const ItemSwitchComponent = [GoogleProductComponent, AmazonProductComponent, FlipcartProductComponent, MyntraProductComponent, OppoProductComponent]