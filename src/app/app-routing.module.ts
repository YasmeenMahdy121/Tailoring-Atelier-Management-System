import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAddModelComponent } from './dashboard-add-model/dashboard-add-model.component';
import { DashboardAllModelsWithCrudOPerationComponent } from './dashboard-all-models-with-crud-operation/dashboard-all-models-with-crud-operation.component';
import { DashboardBestSellingModelsComponent } from './dashboard-best-selling-models/dashboard-best-selling-models.component';
import { DashboardChatComponent } from './dashboard-chat/dashboard-chat.component';
import { DashboardConfirmedModelsComponent } from './dashboard-confirmed-models/dashboard-confirmed-models.component';
import { DashboardDeleteModelComponent } from './dashboard-delete-model/dashboard-delete-model.component';
import { DashboardFeedbackComponent } from './dashboard-feedback/dashboard-feedback.component';
import { DashboardNotificationsComponent } from './dashboard-notifications/dashboard-notifications.component';
import { DashboardPendingModelsComponent } from './dashboard-pending-models/dashboard-pending-models.component';
import { DashboardSearshUserModelsComponent } from './dashboard-searsh-user-models/dashboard-searsh-user-models.component';
import { DashboardUpdateModelComponent } from './dashboard-update-model/dashboard-update-model.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ModelDetailsComponent } from './model-details/model-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { UserCustomReservationComponent } from './user-custom-reservation/user-custom-reservation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { ViewAllModelsComponent } from './view-all-models/view-all-models.component';
import { UserAccessGuard } from './user-access.guard';
import { AdminAccessGuard } from './admin-access.guard';
const routes: Routes = [
  {
    path:'',
    component:IntroPageComponent,
    children:[
      {path:'',redirectTo:'landing', pathMatch:'full'},
      {path:'landing',component:LandingPageComponent},
      {path:'signin',component:SigninComponent},
      {path:'registration',component:RegistrationComponent},
    ]
  },
  {
    path:'user_access',canActivate:[UserAccessGuard],
    component:UserAccessComponent,
    children:[
      {path:'',redirectTo:'home', pathMatch:'full'},
      {path:'home',canActivate:[UserAccessGuard],component:HomeComponent},
      {path:'model_details',canActivate:[UserAccessGuard],component:ModelDetailsComponent},
      {path:'user_profile',canActivate:[UserAccessGuard],component:UserProfileComponent},
      {path:'user_search/:keyword',canActivate:[UserAccessGuard],component:UserSearchComponent},
      {path:'feedback',canActivate:[UserAccessGuard],component:FeedbackComponent},
      {path:'custom_reservation',canActivate:[UserAccessGuard],component:UserCustomReservationComponent},
      {path:'view_all_models',canActivate:[UserAccessGuard],component:ViewAllModelsComponent}
    ]
  },
  {
    path:'dashboard',canActivate:[AdminAccessGuard],
    component:DashboardComponent,
    children:[
          {path:'',redirectTo:'atelier_models', pathMatch:'full'},
          {
            path:'atelier_models',canActivate:[AdminAccessGuard],
            component:DashboardAllModelsWithCrudOPerationComponent,
            children:[
              {path:'add_model',canActivate:[AdminAccessGuard],component:DashboardAddModelComponent},
              {path:'update_model/:id',canActivate:[AdminAccessGuard],component:DashboardUpdateModelComponent},
              {path:'delete_model/:id',canActivate:[AdminAccessGuard],component:DashboardDeleteModelComponent},
            ]
          },
          {path:'best_selling',canActivate:[AdminAccessGuard],component:DashboardBestSellingModelsComponent},
          {path:'pending_models',canActivate:[AdminAccessGuard],component:DashboardPendingModelsComponent},
          {path:'confirmed_models',canActivate:[AdminAccessGuard],component:DashboardConfirmedModelsComponent},
          {path:'chat',canActivate:[AdminAccessGuard],component:DashboardChatComponent},
          {path:'searsh_user_models/:keyword',canActivate:[AdminAccessGuard],component:DashboardSearshUserModelsComponent},
          {path:'notifications',canActivate:[AdminAccessGuard],component:DashboardNotificationsComponent},
          {path:'feedbacks',canActivate:[AdminAccessGuard],component:DashboardFeedbackComponent},



        ]
  },
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  

exports: [RouterModule]
})
export class AppRoutingModule { }
