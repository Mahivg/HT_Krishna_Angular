import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AppService } from "../app.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate, CanActivateChild {

  constructor(private appService: AppService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if(!this.appService.getUserLoginStatus()) {
        this.router.navigateByUrl('/login');
      }

    return this.appService.getUserLoginStatus();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
  }

}
