import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../categorie';
import { Categorieservice } from '../categorie.service';


 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  categoryForm: Categorie = {
    id: 0,
    name: '',
    description:''
  };
 
  constructor(private categorieservice:Categorieservice,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.categorieservice.create(this.categoryForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/categories/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}