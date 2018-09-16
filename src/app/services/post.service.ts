import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  addNewPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(post: Post) {
    const indexToRemove = this.posts.findIndex(
        (postE1) => {
          if (postE1 === post) {
            return true;
          }
        }
    );
    this.posts.splice(indexToRemove, 1);
    this.emitPosts();
  }

  lovePost(post: Post, value: number) {
    const indexToChange = this.posts.findIndex(
        (postE1) => {
          if (postE1 === post) {
            return true;
          }
        }
    );
    this.posts[indexToChange].loveIts += value;
    this.emitPosts();
  }

}
