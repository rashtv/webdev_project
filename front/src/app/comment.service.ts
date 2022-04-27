import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Comment} from './models';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  option = new HttpHeaders({'Content-Type': 'application/json'});
  BASIC_URL: string;

  constructor(private client: HttpClient) {
    this.BASIC_URL = 'http://127.0.0.1:8000';
  }

  getComments(): Observable<Comment[]> {
    return this.client.get<Comment[]>(`${this.BASIC_URL}/api/comments`);
  }


  addComment(comment: { sender: string; product_id: number; body: string }): Observable<Comment> {
    // @ts-ignore
    return this.client.post<Comment>(`${this.BASIC_URL}/api/comments/`, comment, this.option);
  }

  updateComment(comment: { sender: string; product_id: number; body: string }, id: number): Observable<Comment> {
    // @ts-ignore
    return this.client.put<Comment>(`${this.BASIC_URL}/api/comments/${id}/`, comment, this.option);
  }

  deleteComment(id: number): Observable<any> {
    return this.client.delete(`${this.BASIC_URL}/api/comments/${id}`);
  }
}
