
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-index',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './chat-index.component.html',
  styleUrl: './chat-index.component.scss'
})
export class ChatIndexComponent {
  conversation: any[] = [];

  constructor() {
    this.conversation = [
      {
        "role": "assistant",
        "content": "Here’s an example of a longer message with formatting:\n\n**Key Points:**\n- You can use **bold** for emphasis\n- Line breaks (`\\n`) separate paragraphs\n- Lists can be written with `-` or numbers\n\n**Example paragraph:**\n\nThis is a paragraph that explains something in detail. Notice how it’s separated by a blank line from the list above, which makes the response more readable.\n\n**Next Steps:**\n1. Experiment with formatting in your prompts\n2. Render the text in a Markdown-aware viewer (like most chat UIs)\n3. Use line breaks for clarity"
      },
      {
        "role": "user",
        "content": "Here’s an example of a longer message with formatting:\n\n**Key Points:**\n- You can use **bold** for emphasis\n- Line breaks (`\\n`) separate paragraphs\n- Lists can be written with `-` or numbers\n\n**Example paragraph:**\n\nThis is a paragraph that explains something in detail. Notice how it’s separated by a blank line from the list above, which makes the response more readable.\n\n**Next Steps:**\n1. Experiment with formatting in your prompts\n2. Render the text in a Markdown-aware viewer (like most chat UIs)\n3. Use line breaks for clarity"
      },
    ]
  }
}
