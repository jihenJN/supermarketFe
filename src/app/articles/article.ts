import { Categorie } from './../categories/categorie';
export interface Article {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: Categorie;
}
