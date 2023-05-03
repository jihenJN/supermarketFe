import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root',
})
export class Categorieservice {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Categorie[]>('http://localhost:8080/category');
  }
  create(payload: Categorie) {
    return this.http.post<Categorie>('http://localhost:8080/Category', payload);
  }

  getById(id: number) {
    return this.http.get<Categorie>(`http://localhost:8080/Category/${id}`);
  }
  update(payload: Categorie) {
    return this.http.put(`http://localhost:8080/Category`, payload);
  }
  delete(id: number) {
    return this.http.delete<Categorie>(`http://localhost:8080/Category/${id}`);
  }
}
