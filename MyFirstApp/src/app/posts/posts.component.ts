import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/Post';
import { PostService } from '../services/PostService';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(response => {
      this.posts = response;
    });
  }

  showPost(id: number) {
    this.router.navigateByUrl('/posts/' + id);
  }

  addPost() {
    this.router.navigateByUrl('/posts/add-new');
  }

}
