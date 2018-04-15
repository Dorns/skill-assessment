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

  emailCheck() {
    let erroEmail = document.querySelector(".erroEmail");
    var email = $('#email').text(); 
    var emailCheck = $('#emailCheck').text();
    if (email == emailCheck) {
      console.log("igual");
      $('.erroEmail').hide();
    }else{
      console.log("NAO"); 
      $('.erroEmail').show();
    }
  }

  passwordCheck() {
    let erroSenha = document.querySelector(".erroSenha");
    let senha = document.querySelector("#senha");
    let senhaCheck = document.querySelector("#senhaCheck");
    if (senha == senhaCheck) {
      erroSenha.classList.add("display: none");
    }else{
      erroSenha.classList.add("display: block");
    }
  }

  signInWithTwitter() {
    this.authService.signInWithTwitter()
    .then((res) => { 
        this.router.navigate(['dashboard'])
        $('#exampleModal').modal('hide')
      })
    .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
        this.router.navigate(['dashboard'])
        $('#exampleModal').modal('hide')
      })
    .catch((err) => console.log(err));
  }

  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
       .then((res) => {
          console.log(res);
          this.router.navigate(['dashboard']);
          $('#exampleModal').modal('hide')
       })
       .catch((err) => console.log('error: ' + err));
  }

  signUpWithEmail() {
      this.authService.emailSignUp(this.user.email, this.user.password)
          .then((res) => {
            console.log(res);
            this.router.navigate(['dashboard']);
            $('#exampleModal').modal('hide')
        })
        .catch((err) => console.log('error: ' + err));
  }
  
  ngOnInit() {
  }

}