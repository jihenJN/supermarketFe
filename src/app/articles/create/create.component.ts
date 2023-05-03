import { Component } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { Categorieservice } from 'src/app/categories/categorie.service';
import { Categorie } from 'src/app/categories/categorie';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  allCategories: Categorie[] = [];
  articleForm: Article = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    category: {
      id: 0,
      name: '',
      description: '',
    },
  };

  constructor(
    private Articleervice: ArticleService,
    private categorieservice: Categorieservice,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categorieservice.get().subscribe((data) => {
      this.allCategories = data;
    });
  }
  create() {
    this.Articleervice.create(this.articleForm).subscribe({
      next: (data) => {
        this.router.navigate(['/articles/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
