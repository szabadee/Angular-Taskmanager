import { Component } from '@angular/core';
import { AppModel, AppInterface } from './app.model';
import { SignUpModel } from './sign-up.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  public taskModel = new AppModel();

  public appImpl: AppInterface = <AppInterface>{};

  public signUpModel: SignUpModel = new SignUpModel();

  public fullnameInvalid = true;
  public emailInvalid = true;

  public regexpName = /^[A-Z]/;
  public regexpEmail = /^[a-zA-Z0-9]+@[a-zA-Z_]+?\.[a-zA-Z0-9]{2,3}$/;
  public regexpPassWeak = /^[a-z\-0-9]/;

  constructor() {
  }

  public showAppModelValue(event: AppModel) {
    console.log(event);
  }

  public changeChecked(isChecked: boolean) {
    this.taskModel.checked = !!isChecked;
  }

  public getColor(checked: boolean) {
    return checked ? 'red' : 'green';
  }

  public nameChecker(name: string) {
    if (this.regexpName.test(name[0])) {
      return true;
    }
  }

  public emailChecker(email: string) {
    if (this.regexpEmail.test(email)) {
      return true;
    }
  }

  public passwordChecker(password: string) {
    if(this.regexpPassWeak.test(password) && password.length <= 8) {
      return true;
    }
  }

  public validateName(event: any) {
    if (!event.target.value) {
      this.fullnameInvalid = true;
    }
    const fullname = event.target.value ? event.target.value : '';
    this.fullnameInvalid = !(fullname.charAt(0) === fullname.charAt(0).toUpperCase());
  }

  public validateEmail(event: any) {
    const email = event.target.value;
    this.emailInvalid = !email.match(this.regexpEmail);
  }
}

