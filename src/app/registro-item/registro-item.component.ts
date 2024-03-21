import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../services/items.service';

// item.model.ts
export interface Item {
  name: string;
  price: number;
  category: string;
  picture: File | null;
}

@Component({
  selector: 'app-register-item',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './registro-item.component.html',
  styleUrls: ['./registro-item.component.css']
})
export class RegistroItemComponent {
  item: Item = {
    name: '',
    price: 0,
    category: '',
    picture: null
  };

  onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    const file: File | null = element.files ? element.files[0] : null;
    this.item.picture = file;
  }

  constructor(private itemsService: ItemService) {}

  onSubmit(): void {
    this.itemsService.registerItem(this.item).subscribe({
      next: (response) => {
        console.log('Item registered successfully', response);
        window.alert('Item registrado exitoso!!');
      },
      error: (error) => {
        console.error('There was an error registering the item', error);
        window.alert('Item registrado error!!');
      }
    })
  }
}
