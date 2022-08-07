import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable , BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn=new BehaviorSubject<any>(null)
  isAdmin=new BehaviorSubject<any>(null)

  constructor(private mrTailorAuth:AngularFireAuth, private router:Router, private mrTailorDB:AngularFirestore) {
    // this.isLoggedIn.next(localStorage.getItem('mrTailorCurrentUserKey')?localStorage.getItem('mrTailorCurrentUserKey'):null);
  }

    // login
    login(email:any, password:any, isAdmin:boolean){
      this.mrTailorAuth.signInWithEmailAndPassword(email, password).then((userCredential)=>{
        let user = userCredential.user;
        this.isLoggedIn.next(user?.uid);
        this.isAdmin.next(isAdmin);
        localStorage.setItem("mrTailorCurrentUserKey", JSON.stringify(user?.uid))
        localStorage.setItem("mrTailorAdmin", JSON.stringify(isAdmin))
        if(isAdmin){
          this.router.navigate(["/dashboard"]);
        }
        else{
          this.router.navigate(["/user_access"]);
        }
      },err=>{
        console.log(err.message)
        this.router.navigate(["/signin"]);
      })
    }

    // register
    register(userInfo:any, isAdmin:boolean){
      this.mrTailorAuth.createUserWithEmailAndPassword(userInfo.email, userInfo.password).then((userCredential)=>{
        let user = userCredential.user;
        this.isLoggedIn.next(user?.uid);
        this.isAdmin.next(isAdmin);
        localStorage.setItem("mrTailorCurrentUserKey", JSON.stringify(user?.uid))
        localStorage.setItem("mrTailorAdmin", JSON.stringify(isAdmin))
        if(isAdmin){
          let ref = this.mrTailorDB.collection("/mrTailorAdmins").doc(user?.uid)
          ref.set({...userInfo, adminKey:user?.uid})
          this.router.navigate(["/dashboard"]);
        }
        else{
          let ref = this.mrTailorDB.collection("/mrTailorClients").doc(user?.uid)
          ref.set({...userInfo, clientKey:user?.uid})
          this.router.navigate(["/user_access"]);
        }
      },err=>{
        console.log(err.message)
        this.router.navigate(["/signin"]);
      })
    }

    // log out
    logOut(){
      this.mrTailorAuth.signOut().then(()=>{
        this.isLoggedIn.next(null);
        this.isAdmin.next(null);
        localStorage.removeItem('mrTailorCurrentUserKey')
        localStorage.removeItem('mrTailorAdmin')
        this.router.navigate(["/signin"]);
      },err=>{
        console.log(err.message)
        this.router.navigate(["/signin"]);
      })
    }

    getUserInfo(userKey:any, isAdmin:boolean){
      if(isAdmin){
        let ref = this.mrTailorDB.collection("/mrTailorAdmins").doc(userKey)
        return ref.snapshotChanges()
      }
      else{
        let ref = this.mrTailorDB.collection("/mrTailorClients").doc(userKey)
        return ref.snapshotChanges()
      }
    }

}
