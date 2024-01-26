import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLetterUpperCasePipe } from '../first-letter-upper-case.pipe';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-stagiaire',
  standalone: true,
  imports: [CommonModule, FirstLetterUpperCasePipe],
  templateUrl: './stagiaire.component.html',
  styleUrl: './stagiaire.component.css'
})
export class StagiaireComponent {
  tableauDeStrings: string[] = ['7osni', 'Jamila', 'Hazem'];
  users: any;
  constructor(private service: UsersService) {// injecter le service usersService qui contient le httpClient(lien fichier json avec users)
    console.log("constructeur injecte Service HttpClient")
  }
  ngOnInit(): void {// ngOnInit chargement de composant
    console.log("NgOnInit :apeller la methode du service  getAllUsers()")
    this.service.getAllUsers().subscribe(
      data => {
        this.users = data;
        console.log(this.users)
      }
    )
    //this.service.getAllUsers().subscribe(users => console.log(users));
    //console.log(this.service.getAllUsers);
  }
}
