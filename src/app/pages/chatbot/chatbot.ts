import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chatbot.html',
  imports: [FormsModule,CommonModule],
  styleUrls: ['./chatbot.css']
})
export class ChatBotComponent {
  question = '';
  reply = '';
  loading = false;

  constructor(private http: HttpClient) { }

  askBot() {
    this.loading = true;
    this.http.post<any>('http://localhost:4000/api/ask', { question: this.question })
      .subscribe({
        next: res => {
          this.reply = res.answer;
          this.loading = false;
        },
        error: err => {
          this.reply = 'Error from server.';
          this.loading = false;
        }
      });
  }
}
