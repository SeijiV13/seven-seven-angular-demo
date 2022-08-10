import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../models/blog.interface';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input('blogItem') blog: Blog | undefined
  @Output() actionEmitter = new EventEmitter<Blog>();

  // for sibling communication
  @Input() passedBlog: Blog | undefined; 
  constructor() { }

  ngOnInit(): void {
  }

  sendAction() {
    this.actionEmitter.emit(this.blog)
  }

}
