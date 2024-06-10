import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-list-provider',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterOutlet],
  templateUrl: './list-provider.component.html',
  styleUrl: './list-provider.component.css'
})
export class ListProviderComponent {
  //public urlUpload = environment.urlUploadImage;

//public urlUpload= 'http://127.0.0.1:8080/uploads' ;
public urlUpload = environment.urlUploadImage;
  providers: any;
  constructor(private service: ProviderService, private router :Router) {
    console.log("constructeur injecte Service HttpClient")
  }

  ngOnInit(): void {// ngOnInit chargement de composant
   this.refreshListProviders() ;
}

deleteProvider(myObj:any) { //console.log(this.provider);

  this.service.deleteProvider(myObj).subscribe(
 response => { console.log(response); this.refreshListProviders(); }
 ) 
 } 
 
 refreshListProviders() { 
 this.service.listProviders().subscribe( 
 response => { this.providers = response; }
  ); 
 }
 
  updateProvider(myObj:any) { 
 this.router.navigate(['updateProvider' + '/' + myObj['id']] //navigate to the component
 );
  }
}
