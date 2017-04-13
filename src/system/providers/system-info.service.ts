import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SystemInfoService {
  httpOptions = new RequestOptions({
    headers: new Headers({
      "Content-Type": 'application/json'
    })
  });

  constructor(private http: Http) { }

  getSystemInfo(url: string): Promise<any> {
    if(!url || url.trim() === "") {
      return Promise.reject("500: Internal error");
    }

    return this.http.get(url, this.httpOptions).toPromise()
    .then(response => response.json())
    .catch(error => console.error("Get systeminfo error: ", error));
  }

}