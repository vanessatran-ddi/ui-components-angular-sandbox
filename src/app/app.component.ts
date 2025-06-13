import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fullName: string = "";
  accountNumber: string = "";
  price: string = "";
  quantity: string = "";

  onChange(event: Event) {
    const customEvent = event as CustomEvent;
    const { name, value } = customEvent.detail;

    switch(name) {
      case 'fullName':
        this.fullName = value;
        break;
      case 'accountNumber':
        this.accountNumber = value;
        break;
      case 'price':
        this.price = value;
        break;
      case 'quantity':
        this.quantity = value;
        break;
    }
  }
}
