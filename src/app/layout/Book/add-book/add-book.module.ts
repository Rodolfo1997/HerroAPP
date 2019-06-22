import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBookRoutingModule } from './add-book-routing.module';
import { AddBookComponent } from './add-book.component';
import { PageHeaderModule } from '../../../shared';
import { FormsModule }   from '@angular/forms';
import { FormModule } from '../../form/form.module';

@NgModule({
    imports: [CommonModule, AddBookRoutingModule, PageHeaderModule, FormsModule],
    declarations: [AddBookComponent]
})
export class AddBookModule {}
