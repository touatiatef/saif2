import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
nom : string ="formulaire de contact"
logo : string="https://as1.ftcdn.net/v2/jpg/02/63/24/36/500_F_263243670_HGgU8a0KqkFi5cmkV2cLK4PyIyuMuaa1.jpg"

info(){
  alert("hello Certif OCA ");
  console.log("hello world");
}
}
