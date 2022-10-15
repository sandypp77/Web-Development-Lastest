import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly http: HttpClient
  ) { }

  postLogin(body: any): Observable<any> {
    return this.http.post("dev/login", body);
  }
}
