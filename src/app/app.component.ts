import { Component } from '@angular/core';
interface User {
  firstName: string;
  lastName: string;
  age: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: User[] = [];

  constructor() {
    this.users = [
      {
        firstName: "Christian",
        lastName: "Batz",
        age: 18
      },
      {
        firstName: "Brain",
        lastName: "Wisozk",
        age: 19
      },
      {
        firstName: "Neha",
        lastName: "Jones",
        age: 23
      },
      {
        firstName: "Tristin",
        lastName: "Buckridge",
        age: 31
      }
    ];
  }

  handleSort(event: any) {
    const {sortBy, sortDir} = event.detail;
    console.log("handleSort", sortBy, sortDir);
    this.users.sort(
      (a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir
    );
  }
}
