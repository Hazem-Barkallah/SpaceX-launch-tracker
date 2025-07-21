import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ask {
  private apiUrl = 'http://localhost:3000/api/chat';
  private http = inject(HttpClient);
  askGPT(question: string) {
    return this.http.post<{ reply: string }>(this.apiUrl, { question });
  }

}
