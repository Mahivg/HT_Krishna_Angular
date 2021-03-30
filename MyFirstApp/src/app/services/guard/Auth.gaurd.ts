import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  canActivate(): boolean {
    // calculation
    return true;
  }
}
