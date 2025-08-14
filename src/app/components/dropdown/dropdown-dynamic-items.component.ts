import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GoabDropdown, GoabDropdownItem, GoabFormItem } from '@abgov/angular-components';

export interface Item {
  value: string;
  label: string;
}

@Component({
  selector: 'app-dropdown-dynamic-items',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    GoabDropdown,
    GoabDropdownItem,
    GoabFormItem
  ],
  templateUrl: './dropdown-dynamic-items.component.html'
})
export class DropdownDynamicItemsComponent implements OnInit {
  changeForm = new FormGroup({
    parentDropdown: new FormControl(''),
    childDropdown: new FormControl('')
  });

  parents = ['All', 'Big', 'Small'];
  children: string[] = [];

  childrenAll = ['Bus', 'Elephant', 'Key', 'Pen', 'Watch', 'Truck'];
  childrenBig = ['Elephant', 'Truck', 'Bus'];
  childrenSmall = ['Key', 'Pen', 'Watch'];

  ngOnInit() {
    this.onChange();
  }

  onChange() {
    this.changeForm.get('parentDropdown')?.valueChanges.subscribe((value) => {
      if (value === 'All') {
        this.children = this.childrenAll;
      } else if (value === 'Big') {
        this.children = this.childrenBig;
      } else {
        this.children = this.childrenSmall;
      }
      
      // Reset child dropdown when parent changes
      this.changeForm.get('childDropdown')?.setValue('');
    });
  }

  generateUniqueKey(index: number, item: string): string {
    return `${item}_${index}_${Math.random()}`;
  }
}