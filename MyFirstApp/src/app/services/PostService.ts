import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../model/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postBaseURL  : string = 'http://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient){}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postBaseURL + 'posts');
  }

  getPostById(id: number) : Observable<Post> {
    return this.http.get<Post>(this.postBaseURL + 'posts/' + id);
  }
}
