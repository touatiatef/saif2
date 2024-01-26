import { Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { UpdateArticleComponent } from './update-article/update-article.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "app-navbar" },
    { path: "listProvider", component: ListProviderComponent , canActivate: [AuthGaurdService] },
    { path: "addProvider", component: AddProviderComponent , canActivate: [AuthGaurdService] },
    { path: "updateProvider/:id", component: UpdateProviderComponent , canActivate: [AuthGaurdService] },// route avec parameter
    { path: "listArticle", component: ListArticleComponent , canActivate: [AuthGaurdService] },
    {path: "addArticle", component:AddArticleComponent, canActivate: [AuthGaurdService] },
    {path:"login",component:LoginComponent},
    {path:"logout",component:LogoutComponent, canActivate: [AuthGaurdService] },
    { path: "updateArticle/:id", component: UpdateArticleComponent , canActivate: [AuthGaurdService]}
];


