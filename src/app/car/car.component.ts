import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})

export class CarComponent {
    @Input('car') car: { name: string, isSold: boolean };

    buyReturn(type: string) {
        this.car.isSold = type === 'buy' ? true : false;
    }
}