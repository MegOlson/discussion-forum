import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent {
  @Output() clickSender = new EventEmitter();

  addPost(headline: string, content: string) {
    let newPost: Post = new Post(headline, content);
    this.clickSender.emit(newPost);
  }
}
