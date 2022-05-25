import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  usernameError: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this._createForm();
  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required
      ]),
      confirmPassword: new FormControl(null, [
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required
      ])
    }, [this._checkPassword])
  }

  register(): void {
    const rawValue = this.form.getRawValue();
    delete rawValue.confirmPassword;
    this.authService.register(rawValue).subscribe(
      value => this.router.navigate(['login']),
      err => this.usernameError = err.error.username[0]
    );
  }

  _checkPassword(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password?.value === confirmPassword?.value ? null : {notSame: true}
  }
}
