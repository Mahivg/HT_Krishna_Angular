import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../model/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postBaseURL  : string = 'http://jsonplaceholder.typicode.com/';

  // commonHTTPHeaders = new HttpHeaders({
  //   'authToken' : 'ASDANSIUXACANSICNEENIUFNECE'
  // });

  constructor(private http: HttpClient){}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postBaseURL + 'posts');
  }

  getPostById(id: number) : Observable<Post> {
    return this.http.get<Post>(this.postBaseURL + 'posts/' + id);
  }

  addPost(post: Post) {
    return this.http.post<Post>(this.postBaseURL + 'posts', post);
  }

  updatePost(post: Post) {
    return this.http.put<Post>(this.postBaseURL + 'posts', post);
  }
}
