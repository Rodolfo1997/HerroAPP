import { Component, OnInit } from '@angular/core';
import {Book} from "../../Model/book.model";
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
 
  baseUrl: string = 'https://localhost:5001/api/books';

  createBook(book: Book) {
    return this.http.post(this.baseUrl, book);
  }

  bookModel = new Book();
  
  submitType: string = 'Save';
  registerForm: FormGroup;
  
  private formBuilder: FormBuilder;

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
  }

  onSubmit(){
    this.createBook(this.bookModel)
      .subscribe( data => {
        this.router.navigate(['listBook']);
      });
    console.log(this.bookModel);
    this.createBook(this.bookModel)
  }

}
