import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { Categorieservice } from '../categorie.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allCategories: Categorie[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private categorieservice: Categorieservice) {}

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.get();
  }

  get() {
    this.categorieservice.get().subscribe((data) => {
      this.allCategories = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.categorieservice.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allCategories = this.allCategories.filter(
          (_) => _.id != this.idTodelete
        );
        this.deleteModal.hide();
      },
    });
  }
}
