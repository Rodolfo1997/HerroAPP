import { Component, OnInit } from '@angular/core';
import {Book} from "../../Model/book.model";
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  baseUrl: string = 'https://localhost:5001/api/books';

  createBook(book: Book) {
    return this.http.post(this.baseUrl, book);
  }

  updateBook(book: Book) {
    return this.http.put(this.baseUrl + '/' + book.id, book);
  }

  bookModel = new Book();
  
  submitType: string = 'Save';
  registerForm: FormGroup;
  
  private formBuilder: FormBuilder;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    var bookEdit = localStorage.getItem("editBookId");
    if( bookEdit != "" ){
      this.getBookById(bookEdit).subscribe( data => {
        this.bookModel.id = data.id;
        this.bookModel.author = data.author;
        this.bookModel.bookName = data.bookName;
        this.bookModel.category = data.category;
        this.bookModel.price = data.price;
      });

      localStorage.setItem("editBookId", "");
    }
  }

  onSubmit(){
    if(this.bookModel.id == "" || this.bookModel.id == null){
      this.createBook(this.bookModel)
        .subscribe( data => {
          this.router.navigate(['listBook']);
        });
        console.log(this.bookModel);
       // this.createBook(this.bookModel)
    }
    else{
      this.updateBook(this.bookModel)
      .subscribe( data => {
        this.router.navigate(['listBook']);
      });
      console.log(this.bookModel);
      //this.createBook(this.bookModel)
    }
    
  }

  getBookById(id: string)
  {
    return this.http.get<Book>(this.baseUrl + '/' + id);
  }
}
