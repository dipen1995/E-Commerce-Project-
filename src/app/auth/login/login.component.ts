import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errors: any = [];
  notify: string;

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    this.route.queryParams.subscribe((params) => {
      const key1 = 'registered';
      const key2 = 'loggedOut';
      if (params[key1] === 'success') {
        this.notify = 'You have been successfully registered. Please Log in';
      }
      if (params[key2] === 'success') {
        this.notify = 'You have been loggedout successfully';
      }
    });
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@codper.com*$')]],
      password: ['', Validators.required]
    });
  }

  isValidInput(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  login(): void {
    this.errors = [];
    this.auth.login(this.loginForm.value)
      .subscribe((token) => {
        this.router.navigate(['/'], { queryParams: { loggedin: 'success' } });
        console.log("This is the email" +this.loginForm.controls['email'].value);
        if(this.loginForm.controls['email'].value == 'admin@codper.com'){
          console.log('You logged in succesfully! Welcome Admin');
          this.auth.setAdmin(true);

        }else{
          console.log('You logged in successfully!');
          this.auth.setAdmin(false);
        }
       },
        (errorResponse) => {
          this.errors.push(errorResponse.error.error);
        });
  }
 /* login(): void {
    this.errors = [];
    this.auth.login(this.loginForm.value.email === 'admin@codper.com' && this.loginForm.value.password === 'admin');{
      this.auth.login(this.loginForm.value)
      .subscribe((token) => {
        this.router.navigate(['/'], { queryParams: { loggedin: 'success' } });
       
    },
        (errorResponse) => {
          this.errors.push(errorResponse.error.error);
        });
    }
  }*/
}
