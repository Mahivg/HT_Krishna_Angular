import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Req intercepted....');
    const customReq = req.clone({
      headers: new HttpHeaders({
        'authToken' : 'asildnsanceijneskdjnkdlsnsndkcnds'
      })
    });
    return next.handle(customReq);
  }

}
