import { GoabContainer, GoabDropdown, GoabDropdownItem, GoabFormItem, GoabInput, GoabButton } from "@abgov/angular-components";
import { GoabDropdownOnChangeDetail } from "@abgov/ui-components-common";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: "app-dropdown-add-item-dynamically",
  template: `
    <h1>Dropdown - Add Items Dynamically</h1>
    
    <goab-container>
      <goab-form-item label="Add New Item">
        <goab-input 
          name="newItem" 
          [formControl]="newItemControl" 
          placeholder="Enter new item name">
        </goab-input>
        <goab-button 
          size="compact" 
          type="secondary" 
          (click)="addNewItem()"
          [disabled]="!newItemControl.value">
          Add Item
        </goab-button>
      </goab-form-item>

      <goab-form-item label="Dynamic Dropdown" mt="2xl">
        <goab-dropdown 
          name="dynamicDropdown" 
          [filterable]="true"
          (onChange)="onDropdownChange($event)"
          placeholder="Select an item">
          <goab-dropdown-item 
            *ngFor="let item of items; trackBy: trackByValue" 
            [value]="item.value" 
            [label]="item.label">
          </goab-dropdown-item>
        </goab-dropdown>
        <div slot="helptext">Selected: {{selectedValue || 'None'}}</div>
      </goab-form-item>

      <goab-form-item label="Items List" mt="2xl">
        <div>
          <p><strong>Current items ({{items.length}}):</strong></p>
          <ul>
            <li *ngFor="let item of items; trackBy: trackByValue">
              {{item.label}} ({{item.value}})
              <goab-button 
                size="compact" 
                type="tertiary" 
                (click)="removeItem(item.value)"
                ml="xs">
                Remove
              </goab-button>
            </li>
          </ul>
        </div>
      </goab-form-item>
    </goab-container>
  `,
  imports: [
    GoabDropdown,
    GoabDropdownItem,
    GoabFormItem,
    GoabContainer,
    GoabInput,
    GoabButton,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class DropdownAddItemDynamicallyComponent {
  newItemControl = new FormControl('');
  selectedValue: string | null = null;
  
  items = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' }
  ];

  addNewItem(): void {
    const newItemName = this.newItemControl.value?.trim();
    if (!newItemName) return;

    const newValue = newItemName.toLowerCase().replace(/\s+/g, '-');
    
    // Check if item already exists
    if (this.items.some(item => item.value === newValue)) {
      return;
    }

    this.items.push({
      value: newValue,
      label: newItemName
    });

    // Clear the input
    this.newItemControl.setValue('');
  }

  removeItem(valueToRemove: string): void {
    this.items = this.items.filter(item => item.value !== valueToRemove);
    
    // Clear selection if the selected item was removed
    if (this.selectedValue === valueToRemove) {
      this.selectedValue = null;
    }
  }

  onDropdownChange(event: GoabDropdownOnChangeDetail): void {
    this.selectedValue = event.value || null;
  }

  trackByValue(index: number, item: { value: string; label: string }): string {
    return item.value;
  }
}