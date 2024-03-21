import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../registro-item/registro-item.component'; // Update the path as needed
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) {}

  registerItem(item: Item): Observable<any> {
    const formData = new FormData();
    formData.append('name', item.name);
    formData.append('price', item.price.toString());
    formData.append('category', item.category);
    if (item.picture) {
      formData.append('picture', item.picture);
    }

    return this.http.post('your-api-endpoint/items', formData);
  }
}
