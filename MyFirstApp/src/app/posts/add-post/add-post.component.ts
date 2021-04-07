import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/services/PostService';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostFG: FormGroup;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.addPostFG = new FormGroup({
      postId: new FormControl(),
      userId: new FormControl(),
      title: new FormControl(),
      body: new FormControl()
    });
  }

  addPostSubmit() {
    const postObj = this.addPostFG.value;
    this.postService.addPost(postObj).subscribe(res => {
      console.log('Post Added : ');
      console.log(res);
    }, err => { console.log(err) });
  }

}
