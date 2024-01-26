import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ContactComponent,StagiaireComponent,HttpClientModule,PostComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ams';
  titreformation : string ="fullstack spring angular";
}
