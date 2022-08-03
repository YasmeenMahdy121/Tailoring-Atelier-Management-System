import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAddModelComponent } from './dashboard-add-model/dashboard-add-model.component';
import { DashboardAllModelsWithCrudOPerationComponent } from './dashboard-all-models-with-crud-operation/dashboard-all-models-with-crud-operation.component';
import { DashboardBestSellingModelsComponent } from './dashboard-best-selling-models/dashboard-best-selling-models.component';
import { DashboardChatComponent } from './dashboard-chat/dashboard-chat.component';
import { DashboardDeleteModelComponent } from './dashboard-delete-model/dashboard-delete-model.component';
import { DashboardPendingModelsComponent } from './dashboard-pending-models/dashboard-pending-models.component';
import { DashboardSearshModelComponent } from './dashboard-searsh-model/dashboard-searsh-model.component';
import { DashboardSearshUserModelsComponent } from './dashboard-searsh-user-models/dashboard-searsh-user-models.component';
import { DashboardUpdateModelComponent } from './dashboard-update-model/dashboard-update-model.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { ModelDetailsComponent } from './model-details/model-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'signin',component:SigninComponent},
  {path:'registration',component:RegistrationComponent},
  {
    path:'user_access',
    component:UserAccessComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'model_details',component:ModelDetailsComponent},
      {path:'user_profile',component:UserProfileComponent},
      {path:'user_search/:keyword',component:UserSearchComponent},
      {path:'feedback',component:FeedbackComponent}
    ]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
          {path:'',component:DashboardAllModelsWithCrudOPerationComponent},
          {
            path:'atelier_models',
            component:DashboardAllModelsWithCrudOPerationComponent,
            children:[
              {path:'add_model',component:DashboardAddModelComponent},
              {path:'update_model',component:DashboardUpdateModelComponent},
              {path:'delete_model',component:DashboardDeleteModelComponent},
            ]
          },
          {path:'best_selling',component:DashboardBestSellingModelsComponent},
          {path:'chat',component:DashboardChatComponent},
          {path:'pending_models',component:DashboardPendingModelsComponent},
          {path:'searsh_model/:keyword',component:DashboardSearshModelComponent},
          {path:'searsh_user_models/:keyword',component:DashboardSearshUserModelsComponent},


        ]
  },
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
