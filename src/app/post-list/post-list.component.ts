import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.postSubject.subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postService.postSubject.unsubscribe();
  }

}
