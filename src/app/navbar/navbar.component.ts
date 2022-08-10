import { Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {


  constructor(private Router:Router) { }
  outPut:any;
  // @ViewChild('searchValue') searchInputVal!:ElementRef;
  // outPut:any = this.searchInputVal.nativeElement.value;

  // searchVal:any = this.searchInputVal.nativeElement.value;
  ngOnInit(): void {

      // this.outPut = this.searchInputVal.nativeElement.value;

  }
  ngAfterViewInit(): void {
    // this.outPut = this.searchInputVal.nativeElement.value;

    // console.log(this.outPut);
  }
  onSearch(searchValue:any){
    // this.outPut = this.searchInputVal.nativeElement.value;
    console.log(searchValue);
    this.Router.navigate(['/user_access/user_search',searchValue])
  }


}
