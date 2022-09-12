import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  width = 10;
  title: string = 'angular-store';
  person = {
    name: 'Efrén',
    age: 22,
    img: 'https://th.bing.com/th/id/OIP.krXgDcts2hh2AT61oGCDrgHaE8?pid=ImgDet&rs=1',
  };
  names: string[] = ['Efrén', 'Luis', 'Juan', 'Pedro'];
  newName: string = '';
  box = {
    width: 100,
    height: 100,
    background: 'red',
  };
  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.webp',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colección de álbumes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

  register = {
    name: '',
    email: '',
    password: '',
  };

  btnDisabled = true;

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  incrementAge() {
    this.person.age++;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number) {
    this.names.splice(index, 1);
  }
  onRegister() {
    console.log(this.register);
  }
}
