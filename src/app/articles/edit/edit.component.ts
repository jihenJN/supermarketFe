import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Categorieservice } from 'src/app/categories/categorie.service';
import { Categorie } from 'src/app/categories/categorie';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
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
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private categorieservice: Categorieservice
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
    this.getCategories();
  }
  getCategories() {
    this.categorieservice.get().subscribe((data) => {
      this.allCategories = data;
    });
  }

  getById(id: number) {
    this.articleService.getById(id).subscribe((data) => {
      this.articleForm = data;
    });
  }

  update() {
    this.articleService.update(this.articleForm).subscribe({
      next: (data) => {
        this.router.navigate(['/articles/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
