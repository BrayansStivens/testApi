import { Injectable } from '@angular/core';
import { WebRequestService } from './services/web-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private web :WebRequestService) { }

  pathCuentas: string  = "api/cuentas/";

  registrar(payload: any): Observable<any>{
    return this.web.post(`${this.pathCuentas}registar`,payload)
  }

  login(payload: any): Observable<any>{
    return this.web.post(`${this.pathCuentas}login`,payload)
  }
}
