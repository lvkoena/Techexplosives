import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8080/api/users'; // Adjust URL if necessary

  constructor(private http: HttpClient) { }

  getChartData(): Observable<{ name: string, value: number }[]> {
    return this.http.get<{ name: string, value: number }[]>(`${this.baseUrl}/chart-data`);
  }
}
