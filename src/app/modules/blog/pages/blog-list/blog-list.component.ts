import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.interface';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  passedBlog: Blog | undefined;
  // ngIf ngSwitch ngFor
  blogs: Blog[] = [
    {
      title: "Test",
      description: "Test Description",
      published: true,
      authorActive: true
    }, 
    {
      title: "Test 2",
      description: " Test Description2",
      published: false,
      authorActive: true
    },
    {
      title: "Test 3",
      description: " Test Description 3",
      published: true,
      authorActive: true
    }
  ];

  num = 1 ;
  nums = [1, 2, 3, 4]
  constructor() { }

  ngOnInit(): void {
  }

  executeAction(blog: Blog, i:  number) {
    console.log(i)
    this.passedBlog = blog;
  }

  changeNum() {
    this.num++;
  } 



}
