import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {Book} from "../../Model/book.model";
import {AddBookComponent} from "../add-book/add-book.component";

 
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss'],
  animations: [routerTransition()]
})
export class ListBookComponent implements OnInit {

  baseUrl: string = 'https://localhost:5001/api/books';

  Books:  Book[];

  getBooks() {
    return this.http.get<Book[]>(this.baseUrl);
  }

  delete(id: string) {
    return this.http.delete(this.baseUrl + '/Delete/' + id);
  }

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit() {
    this.getBooks()
      .subscribe( data => {
        this.Books = data;
      });
  }
  
  deleteBook(book: Book): void {
    this.delete(book.id)
      .subscribe( data => {
        this.Books = this.Books.filter(u => u !== book);
      })
  };

  editBook(book: Book): void
  {
    localStorage.removeItem("editBookId");
    localStorage.setItem("editBookId", book.id.toString());

    alert(localStorage.getItem("editBookId"));
    this.router.navigate(['addBook']);
  }

}
