import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-provider',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-provider.component.html',
  styleUrl: './add-provider.component.css'
})
export class AddProviderComponent {
  provider: any; 
  selectedFile!: File; // ! : n'est pas encore initialiser 
  constructor(private service: ProviderService, private router : Router) { }

  //get called when the user select an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile);
  }
  ngOnInit() {
   }
  //  createProvider(myform:any) {
  //    this.service.createProvider(myform).subscribe( 
  //     response => { console.log(response); 
  //       this.router.navigate(['listProvider']);
  //     } ); 
  //      }
  createProvider(myform:any) {
    const provider = new FormData();
    provider.append('imageFile', this.selectedFile,this.selectedFile.name);
    //provider.append('imageName',this.selectedFile.name);
    provider.append('name', myform.value.providerName);
    provider.append('email', myform.value.providerEmail);
    provider.append('adress', myform.value.providerAdress);

    this.service.createProvider(provider).subscribe(
      (response) =>{
        console.log(response);
        this.router.navigate(['listProvider']);
      }, error => {
        console.error(error);
        // Handle error, e.g., show an error message
      }
    );

  }
}
