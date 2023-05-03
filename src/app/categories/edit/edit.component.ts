import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../categorie';
import { Categorieservice } from '../categorie.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  categoryForm: Categorie = {
    id: 0,
    name: '',
    description: '',
  };

  constructor(
    private categorieservice: Categorieservice,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.categorieservice.getById(id).subscribe((data) => {
      this.categoryForm = data;
    });
  }

  update() {
    this.categorieservice.update(this.categoryForm).subscribe({
      next: (data) => {
        this.router.navigate(['/categories/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
