import { Component } from '@angular/core';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})

export class CarsComponent {
    cars = [
        { name: 'Ford', isSold: false }, 
        { name: 'Mazda', isSold: false }, 
        { name: 'Mercedes', isSold: false }
    ];

    addElement(newName: string) {
        this.cars.push({
            name: newName,
            isSold: false
        });
    }
}