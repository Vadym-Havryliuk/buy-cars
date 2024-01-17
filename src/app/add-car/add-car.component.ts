import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.css']
})

export class AddCarComponent {
    carName = '';

    @Output('newCarName') newCar = new EventEmitter<string>(); 

    addNewCar() {
        this.newCar.emit(this.carName);
        this.carName = '';
    }
}