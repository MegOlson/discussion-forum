import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  @Output() clickSender = new EventEmitter();

  masterPostList: Post[] = [
    new Post("Kristen Bell is Elsa?","Kristen Bell, the voice of Anna in Frozen, had to be Elsa for Halloween, because her daughter made her do it."),
    new Post("Finnish Lapland trees covered in snow","Finnish Lapland trees covered in snow and it was incredible."),
    new Post("Saying goodbye","It is very hard to say goodbye so just skip goodbyes and leave.")
  ]
}
