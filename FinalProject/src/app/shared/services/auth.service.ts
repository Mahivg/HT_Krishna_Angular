import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn = new BehaviorSubject<boolean>(false);
  userLoggedIn$ = this.userLoggedIn.asObservable();

  private users: User[] = [
    new User('krishna@ht.com', 'test1212'),
    new User('sujatha@ht.com', 'test1313')
  ];

  isUserLoggedIn: boolean = false;

  validateUser(uName: string, password: string) {
    const user = this.users.find(u => u.name === uName);
    if(user) {
      if(user.password === password) {
        this.isUserLoggedIn = true;
      }
    }
    return this.isUserLoggedIn;
  }

  getLoginStatus(): boolean {
    return this.isUserLoggedIn;
  }

  logOut() {
    this.isUserLoggedIn = false;
  }

}
