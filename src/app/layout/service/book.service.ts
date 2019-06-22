import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Book} from "../Model/book.model";

@Injectable()
export class BookService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:5001/api/books';

  getBooks() {
    return this.http.get<Book[]>(this.baseUrl);
  }

  getBookById(id: number) {
    return this.http.get<Book>(this.baseUrl + '/' + id);
  }

  createBook(user: Book) {
    return this.http.post(this.baseUrl, user);
  }

  updateBook(user: Book) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteBook(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}