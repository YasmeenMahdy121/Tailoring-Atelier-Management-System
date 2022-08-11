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

const routes: Routes = [
  {
    path:'',
    component:IntroPageComponent,
    children:[
      {path:'',component:LandingPageComponent},
      {path:'landing',component:LandingPageComponent},
      {path:'signin',component:SigninComponent},
      {path:'registration',component:RegistrationComponent},
    ]
  },
  {
    path:'user_access',
    component:UserAccessComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'model_details',component:ModelDetailsComponent},
      {path:'user_profile',component:UserProfileComponent},
      {path:'user_search/:keyword',component:UserSearchComponent},
      {path:'feedback',component:FeedbackComponent},
      {path:'custom_reservation',component:UserCustomReservationComponent},
      {path:'view_all_models',component:ViewAllModelsComponent}
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
              {path:'update_model/:id',component:DashboardUpdateModelComponent},
              {path:'delete_model/:id',component:DashboardDeleteModelComponent},
            ]
          },
          {path:'best_selling',component:DashboardBestSellingModelsComponent},
          {path:'pending_models',component:DashboardPendingModelsComponent},
          {path:'confirmed_models',component:DashboardConfirmedModelsComponent},
          {path:'chat',component:DashboardChatComponent},
          {path:'searsh_user_models/:keyword',component:DashboardSearshUserModelsComponent},
          {path:'notifications',component:DashboardNotificationsComponent},
          {path:'feedbacks',component:DashboardFeedbackComponent},



        ]
  },
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
