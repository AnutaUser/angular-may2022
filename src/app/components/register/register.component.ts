import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../servicer";
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
      confirmPass: new FormControl(null, [
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required
      ])
    }, [this._checkPassword])
  }

  register() {
    const rawValue = this.form.getRawValue();
    delete rawValue.confirmPass;
    this.authService.register(rawValue).subscribe({
      next: () => this.router.navigate(['login']),
      error: err => this.usernameError = err.error.username[0],
    })
  }

  _checkPassword(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirmPass = form.get('confirmPass');
    return password?.value === confirmPass?.value ? null : {notSame: true};
  }
}
