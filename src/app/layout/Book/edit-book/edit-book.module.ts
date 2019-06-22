import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBookRoutingModule } from './edit-book-routing.module';
import { EditBookComponent } from './edit-book.component';
import { PageHeaderModule } from '../../../shared';
import { FormsModule }   from '@angular/forms';
import { FormModule } from '../../form/form.module';

@NgModule({
    imports: [CommonModule, EditBookRoutingModule, PageHeaderModule, FormsModule],
    declarations: [EditBookComponent]
})
export class EditBookModule {}
