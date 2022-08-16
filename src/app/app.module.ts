import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
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
import { DashboardSearshUserModelsComponent } from './dashboard-searsh-user-models/dashboard-searsh-user-models.component';
import { DashboardBestSellingModelsComponent } from './dashboard-best-selling-models/dashboard-best-selling-models.component';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';
import { DashboardChatComponent } from './dashboard-chat/dashboard-chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardPendingModelsComponent } from './dashboard-pending-models/dashboard-pending-models.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardAddModelComponent } from './dashboard-add-model/dashboard-add-model.component';
import { DashboardDeleteModelComponent } from './dashboard-delete-model/dashboard-delete-model.component';
import { DashboardUpdateModelComponent } from './dashboard-update-model/dashboard-update-model.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { IntroPageNavbarComponent } from './intro-page-navbar/intro-page-navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardConfirmedModelsComponent } from './dashboard-confirmed-models/dashboard-confirmed-models.component';
import { DashboardNotificationsComponent } from './dashboard-notifications/dashboard-notifications.component';
import { DashboardFeedbackComponent } from './dashboard-feedback/dashboard-feedback.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { UserCustomReservationComponent } from './user-custom-reservation/user-custom-reservation.component';
import { SearchPipe } from './search.pipe';
import { ViewAllModelsComponent } from './view-all-models/view-all-models.component';
import { NgRatingBarModule } from 'ng-rating-bar';
import { SearchUserChatPipe } from './search-user-chat.pipe';
import { UserSearchPipe } from './user-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    RegistrationComponent,
    HomeComponent,
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
    DashboardSearshUserModelsComponent,
    DashboardBestSellingModelsComponent,
    DashboardNavbarComponent,
    DashboardChatComponent,
    DashboardPendingModelsComponent,
    PageNotFoundComponent,
    DashboardAddModelComponent,
    DashboardDeleteModelComponent,
    DashboardUpdateModelComponent,
    UserAccessComponent,
    IntroPageComponent,
    IntroPageNavbarComponent,
    LandingPageComponent,
    DashboardConfirmedModelsComponent,
    DashboardNotificationsComponent,
    DashboardFeedbackComponent,
    UserCustomReservationComponent,
    SearchPipe,
    ViewAllModelsComponent,
    SearchUserChatPipe,
    UserSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatSliderModule,
    MatCardModule,
    NgRatingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
