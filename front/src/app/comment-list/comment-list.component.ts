import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../comment.service';
import {Comment} from '../models';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit {
  @Input() productId: number;
  createSender: string;
  createBody: string;
  updateBody: string;
  commentList: Comment[];
  // @ts-ignore
  loading: boolean;

  constructor(private commentService: CommentService) {
    this.createSender = '';
    this.createBody = '';
    this.updateBody = '';
    this.commentList = [];
  }

  ngOnInit(): void {
    this.getCommentsById(this.productId);
  }


  getCommentsById(id: number): void {
    this.loading = true;
    // @ts-ignore
    this.commentService.getComments().subscribe((commentList) => this.commentList = commentList.filter(item => item.product === id));
    this.loading = false;
  }

  deleteComment(id: number): void {
    this.commentService.deleteComment(id).subscribe(() => {
      console.log('deleted', id);
    });
    this.getCommentsById(this.productId);
  }

  createComment(): void {
    if (this.createSender === '' || this.createBody === '') {
      console.log('Empty data');
      return;
    }
    const temp = {
      sender: this.createSender,
      body: this.createBody,
      product_id: this.productId,
    };
    this.createSender = '';
    this.createBody = '';
    this.commentService.addComment(temp).subscribe(() => {
      console.log('created');
    });
    this.getCommentsById(this.productId);
  }

  // tslint:disable-next-line:variable-name
  updateComment(id: number, sender_: string, productId: number): void {
    if (this.updateBody === '') {
      console.log('Empty data');
      return;
    }
    const temp = {
      sender: sender_,
      body: this.updateBody,
      product_id: productId
    };
    this.updateBody = '';
    this.commentService.updateComment(temp, id).subscribe(() => {
      console.log('updated');
    });
    this.getCommentsById(this.productId);
  }
}
