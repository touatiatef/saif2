import { Component } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  posts: any;
  constructor(private service: PostserviceService){
    console.log("constructeur injecte Service HttpClient")
  }
  ngOnInit(): void {
    console.log("NgOnInit :apeller la methode du service  getAllUsers()")
    this.service.getAllPosts().subscribe(
      data => {
        this.posts = data;
        console.log(this.posts)
      }
    )
}
}
