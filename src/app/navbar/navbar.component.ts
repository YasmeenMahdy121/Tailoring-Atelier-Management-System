import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{


  constructor(private Router:Router, private authService:AuthService ) { }
  outPut:any;
  // @ViewChild('searchValue') searchInputVal!:ElementRef;
  // outPut:any = this.searchInputVal.nativeElement.value;

  // searchVal:any = this.searchInputVal.nativeElement.value;
  ngOnInit(): void {

      // this.outPut = this.searchInputVal.nativeElement.value;

  }

  onSearch(searchValue:any){
    // this.outPut = this.searchInputVal.nativeElement.value;
    console.log(searchValue);
    this.Router.navigate(['/user_access/user_search',searchValue])
  }
  logOut(){
    this.authService.logOut()
  }


}
