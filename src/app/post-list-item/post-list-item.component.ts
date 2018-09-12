import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle;
  @Input() postContent;
  @Input() postLoveIts;
  @Input() postCreatedAt;

  constructor() { }

  ngOnInit() {
  }

  onLove() {
    this.postLoveIts += 1;
  }

  onHate() {
    this.postLoveIts -= 1;
  }

}
