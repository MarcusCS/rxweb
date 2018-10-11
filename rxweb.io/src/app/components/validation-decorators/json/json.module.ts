import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { JSON_ROUTING } from './json.routing';
import { JsonComponent } from './json.component';
import { JsonExtendedModule } from '../../../../assets/examples/reactive-form-validators/decorators/json/json.module';
import { DisqusSharedModule } from "src/app/components/shared/disqus/disqus-shared.module";
import { RightSideBarSharedModule } from "src/app/components/shared/right-sidebar/right-sidebar-shared.module";
import { TitleCasePipe } from "@angular/common";

@NgModule({
  imports: [
    JSON_ROUTING,
    CommonModule, FormsModule, ReactiveFormsModule, HighlightModule, JsonExtendedModule, ClipboardModule,DisqusSharedModule,RightSideBarSharedModule],
  declarations: [JsonComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[TitleCasePipe]
})
export class JsonModule { }

