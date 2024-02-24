import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http : HttpClient
  ) { }


  //private baseUrl = 'http://localhost:3000/.netlify/functions/api/';
  private baseUrl = 'https://newsbytesarshjot.netlify.app//.netlify/functions/api/';
  


  
  generateHashedUrl(longUrl: string, basicUtm: any): Observable<any> {

    let controller = 'hash'
    let api = this.baseUrl + controller

    const data = {
      longUrl: longUrl,
      basicUtm: basicUtm,
      
    };
    return this.http.post<any>(api, data);
  }


  getUrls(): Observable<any[]> {

    let controller = 'urls'
    let api = this.baseUrl + controller


    return this.http.get<any[]>(api);
  }



}
