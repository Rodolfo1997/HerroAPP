import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBookRoutingModule } from './list-book-routing.module';
import { ListBookComponent } from './list-book.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [CommonModule, ListBookRoutingModule, PageHeaderModule],
    declarations: [ListBookComponent]
})
export class ListBookModule {}
