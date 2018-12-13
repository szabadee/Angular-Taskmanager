import { Component } from '@angular/core';
import { AppModel, AppInterface } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  public appModel = new AppModel();

  public appImpl: AppInterface = <AppInterface>{};

  public regexp = /^[A-Z]/;

  constructor() {
  }

  public showAppModelValue() {
    console.log(this.appModel);
  }

  public changeChecked(isChecked: boolean) {
    this.appModel.checked = !!isChecked;
  }

  public getColor(checked: boolean) {
    return checked ? 'red' : 'green';
  }

  public nameChecker(name: string) {
    const regexp = /^[A-Z]/;
    return regexp.test(name) ? name : alert('The first letter should be uppercase!');
  }

  public emailChecker(email: string) {
    const regexp = /^\w+@[a-zA-Z_]+?\.com[a-zA-Z]{2,3}$/;
    return regexp.test(email) ? email : alert('Invalid format!');
  }

}

