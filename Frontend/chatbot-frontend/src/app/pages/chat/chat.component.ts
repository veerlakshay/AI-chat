import { Component } from '@angular/core';
import { SharedModule } from '../../utils/shared.component';
import { ApiService } from '../../services/api.service';
import { response } from 'express';
import { Message } from '../../model/message';

@Component({
  selector: 'app-chat',
  imports: [SharedModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  constructor(private apiService: ApiService) { }

  inputTextPrompt = 'hey how are you';
  messagesArray: Message[] = [new Message("Hello, I am a chatbot.", true)];

  sendButtonClicked() {
    if (this.inputTextPrompt.trim() == "") {

    }
    this.messagesArray.push(new Message(this.inputTextPrompt, true));
    this.apiService.getRaondomResponse("Tell me a random joke")
      .subscribe({
        next: (response) => {
          console.log(response);
          this.messagesArray.push(new Message(response, false));
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

}
