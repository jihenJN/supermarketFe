import { Component } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allArticle: Article[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private Articleervice: ArticleService) {}

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.get();
  }

  get() {
    this.Articleervice.get().subscribe((data) => {
      this.allArticle = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.Articleervice.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allArticle = this.allArticle.filter(
          (_) => _.id != this.idTodelete
        );
        this.deleteModal.hide();
      },
    });
  }
}
