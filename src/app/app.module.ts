import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ModelCardComponent } from './model-card/model-card.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackReviewsComponent } from './feedback-reviews/feedback-reviews.component';
import { ModelDetailsComponent } from './model-details/model-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserModelsComponent } from './user-models/user-models.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardAllModelsWithCrudOPerationComponent } from './dashboard-all-models-with-crud-operation/dashboard-all-models-with-crud-operation.component';
import { DashboardModelCardWithCrudOPerationComponent } from './dashboard-model-card-with-crud-operation/dashboard-model-card-with-crud-operation.component';
import { DashboardSearshUserModelsComponent } from './dashboard-searsh-user-models/dashboard-searsh-user-models.component';
import { DashboardSearshModelComponent } from './dashboard-searsh-model/dashboard-searsh-model.component';
import { DashboardBestSellingModelsComponent } from './dashboard-best-selling-models/dashboard-best-selling-models.component';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';
import { DashboardChatComponent } from './dashboard-chat/dashboard-chat.component';
import { DashboardChatSidebarComponent } from './dashboard-chat-sidebar/dashboard-chat-sidebar.component';
import { DashboardAdminAndUserChatComponent } from './dashboard-admin-and-user-chat/dashboard-admin-and-user-chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardPendingModelsComponent } from './dashboard-pending-models/dashboard-pending-models.component';
import { DashboardPendingModelCardComponent } from './dashboard-pending-model-card/dashboard-pending-model-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardAddModelComponent } from './dashboard-add-model/dashboard-add-model.component';
import { DashboardDeleteModelComponent } from './dashboard-delete-model/dashboard-delete-model.component';
import { DashboardUpdateModelComponent } from './dashboard-update-model/dashboard-update-model.component';
import { DashboardBestSellingModelCardComponent } from './dashboard-best-selling-model-card/dashboard-best-selling-model-card.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    RegistrationComponent,
    HomeComponent,
    CategoryComponent,
    ModelCardComponent,
    FeedbackComponent,
    FeedbackFormComponent,
    FeedbackReviewsComponent,
    ModelDetailsComponent,
    UserProfileComponent,
    UserModelsComponent,
    UserInfoComponent,
    UserChatComponent,
    UserSearchComponent,
    DashboardComponent,
    DashboardSidebarComponent,
    DashboardAllModelsWithCrudOPerationComponent,
    DashboardModelCardWithCrudOPerationComponent,
    DashboardSearshUserModelsComponent,
    DashboardSearshModelComponent,
    DashboardBestSellingModelsComponent,
    DashboardNavbarComponent,
    DashboardChatComponent,
    DashboardChatSidebarComponent,
    DashboardAdminAndUserChatComponent,
    DashboardPendingModelsComponent,
    DashboardPendingModelCardComponent,
    PageNotFoundComponent,
    DashboardAddModelComponent,
    DashboardDeleteModelComponent,
    DashboardUpdateModelComponent,
    DashboardBestSellingModelCardComponent,
    UserAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
