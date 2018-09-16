import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLove() {
    this.postService.lovePost(this.post, 1);
  }

  onHate() {
    this.postService.lovePost(this.post, -1);
  }

  onDelete() {
    this.postService.removePost(this.post);
  }

}
