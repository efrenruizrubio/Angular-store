import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'angular-store';
  person = {
    name: 'Efrén',
    age: 22,
    img: 'https://th.bing.com/th/id/OIP.krXgDcts2hh2AT61oGCDrgHaE8?pid=ImgDet&rs=1',
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
}
