import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { NavComponent } from './component/template/nav/nav.component';
import { UsuarioCreateComponent } from './component/usuario/usuario-create/usuario-create.component';
import {HttpClientModule} from '@angular/common/http';
import { UsuarioReadComponent } from './component/usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './component/usuario/usuario-update/usuario-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioCrudComponent,
    NavComponent,
    UsuarioCreateComponent,
    UsuarioReadComponent,
    UsuarioUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
