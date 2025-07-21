import { Component } from '@angular/core';
import { Ask } from '../../services/ask';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.html',
  imports:[FormsModule,CommonModule],
  styleUrl: './chatbot.css'
})
export class ChatbotComponent {
  question = '';
  reply = '';
  loading = false;

  constructor(private askService: Ask) {}

  submitQuestion() {
    if (!this.question.trim()) return;
    this.loading = true;

    this.askService.askGPT(this.question).subscribe({
      next: (res) => {
        this.reply = res.reply;
        this.loading = false;
      },
      error: (err) => {
        this.reply = 'Error talking to the bot.';
        this.loading = false;
      }
    });
  }
}
