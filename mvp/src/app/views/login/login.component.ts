import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: '',
    name: ''
  };

  constructor(private authService: AuthService, private router: Router) {

  }

  signInWithTwitter() {
    this.authService.signInWithTwitter()
      .then((res) => {
        $('#loginButton').hide();
        $('#logoffButton').show();
        this.router.navigate(['dashboard']);
      })
      .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        $('#loginButton').hide();
        $('#logoffButton').show();
        this.router.navigate(['dashboard']);
      })
      .catch((err) => console.log(err));
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then((res) => {
        $('#loginButton').hide();
        $('#logoffButton').show();
        this.router.navigate(['dashboard']);
      })
      .catch((err) => console.log(err));
  }

  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);
        $('#loginButton').hide();
        $('#logoffButton').show();
        this.router.navigate(['dashboard']);
        $('#exampleModal').modal('hide');
      })
      .catch((err) => console.log('error: ' + err));
  }

  signUpWithEmail() {
    this.authService.emailSignUp(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);
        $('#loginButton').hide();
        $('#logoffButton').show();
        this.router.navigate(['dashboard']);
      })
      .catch((err) => console.log('error: ' + err));
  }

  ngOnInit() {
    
  }

}