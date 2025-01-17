import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CricketResponse } from '../model/cricket.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/api/v1';

  getRaondomResponse(prompt: string): Observable<string> {
    return this.http.get(`${this.baseUrl}/chat?inputString=${prompt}`, { responseType: 'text' }) as Observable<string>;
  }


  getSportResponse(sportPrompt: string): Observable<CricketResponse> {
    return this.http.get<CricketResponse>(`${this.baseUrl}/chat/sport-chatbot?inputString=${sportPrompt}`);
  }

  getImageResponse(imageDescription: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/chat/images?imageDescription=${imageDescription}`);
  }
}
