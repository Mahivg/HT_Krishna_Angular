import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/PostService';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(rParams  => {
      const postId = rParams['id'];
      this.postService.getPostById(postId).subscribe(postObj => {
          this.post =  postObj;
      });
    });
  }

}
