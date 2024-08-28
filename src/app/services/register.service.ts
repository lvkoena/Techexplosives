import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8080/api/users'; 

  constructor(private http: HttpClient) { }

  getChartData(): Observable<{ name: string, value: number, year: number }[]> {
    return this.http.get<{ name: string, value: number, year: number }[]>(`${this.baseUrl}/chart-data`);
  }
}
