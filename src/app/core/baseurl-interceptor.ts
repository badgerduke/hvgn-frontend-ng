import { environment } from 'src/environments/environment';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseurlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let apiReq;
    if (req.responseType === 'blob' || req.url.indexOf('cognito') !== -1) {
      apiReq = req.clone();
    }
    else {
      apiReq = req.clone({ url: `${environment.baseurl}/${req.url}` });
    }
    return next.handle(apiReq);
  }
}
