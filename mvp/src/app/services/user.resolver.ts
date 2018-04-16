import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { UserService } from '../services/user.service';
import { UserModel } from '../services/user.model';

@Injectable()
export class UserResolver implements Resolve<UserModel> {

  constructor(public userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) : Promise<UserModel> {

    let user = new UserModel();

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(res => {
        if(res.providerData[0].providerId == 'password'){
          user.name = res.email;
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        }
        else{
          user.name = res.email;
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        }
      }, err => {
        this.router.navigate(['/']);
        return reject(err);
      })
    })
  }
}