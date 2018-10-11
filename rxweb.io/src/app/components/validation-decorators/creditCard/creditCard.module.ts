import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { CREDIT_CARD_ROUTING } from './creditCard.routing';
import { CreditCardComponent } from './creditCard.component';
import { CreditCardExtendedModule } from '../../../../assets/examples/reactive-form-validators/decorators/creditCard/creditCard.module';
import { DisqusSharedModule } from "src/app/components/shared/disqus/disqus-shared.module";
import { RightSideBarSharedModule } from "src/app/components/shared/right-sidebar/right-sidebar-shared.module";
import { TitleCasePipe } from "@angular/common";

@NgModule({
  imports: [
    CREDIT_CARD_ROUTING,
    CommonModule, FormsModule, ReactiveFormsModule, HighlightModule, CreditCardExtendedModule, ClipboardModule,DisqusSharedModule,RightSideBarSharedModule],
  declarations: [CreditCardComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[TitleCasePipe]
})
export class CreditCardModule { }

