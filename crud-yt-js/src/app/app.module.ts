// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { provideHttpClient } from '@angular/common/http'; // Atualizar a importação
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideHttpClient() // Usar provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
