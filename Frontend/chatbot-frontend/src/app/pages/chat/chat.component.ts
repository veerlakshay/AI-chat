import { Component } from '@angular/core';
import { SharedModule } from '../../utils/shared.component';
import { ApiService } from '../../services/api.service';
import { response } from 'express';

@Component({
  selector: 'app-chat',
  imports: [SharedModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  constructor(private apiService: ApiService) { }

  sendButtonClicked() {
    console.log('Send button clicked');
    this.apiService.getRaondomResponse("Tell me a random joke")
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

}
