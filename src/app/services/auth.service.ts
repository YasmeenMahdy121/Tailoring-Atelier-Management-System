import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable , BehaviorSubject} from 'rxjs'
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInInfo=new BehaviorSubject<any>(null)

  constructor(private mrTailorAuth:AngularFireAuth, private router:Router, private mrTailorDB:AngularFirestore) {
    this.loggedInInfo.next(JSON.parse(localStorage.getItem('mrTailorloggedInInfo')||'{}')?JSON.parse(localStorage.getItem('mrTailorloggedInInfo')||'{}'):{});
  }

    // login
    login(email:any, password:any, isAdmin:boolean){
      this.mrTailorAuth.signInWithEmailAndPassword(email, password).then((userCredential)=>{
        let user = userCredential.user;
        let loggedinInfo = {
          isLoggedIn:true,
          currentUserId:user?.uid,
          isAdmin:isAdmin
        }
        this.loggedInInfo.next(loggedinInfo)
        localStorage.setItem("mrTailorloggedInInfo", JSON.stringify(loggedinInfo))
        if(isAdmin){
          this.router.navigate(["/dashboard"]);
        }
        else{
          this.router.navigate(["/user_access"]);
        }
      },err=>{
        console.log(err.message)
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Oops...',
          text:  'هناك خطأ فى الأيميل او الباسورد',
          timer: 1500
        })
        // this.router.navigate(["/signin"]);
      })
    }

    // register
    register(userInfo:any, isAdmin:boolean){
      this.mrTailorAuth.createUserWithEmailAndPassword(userInfo.email, userInfo.password).then((userCredential)=>{
        let user = userCredential.user;
        let loggedinInfo = {
          isLoggedIn:true,
          currentUserId:user?.uid,
          isAdmin:isAdmin
        }
        this.loggedInInfo.next(loggedinInfo)
        localStorage.setItem("mrTailorloggedInInfo", JSON.stringify(loggedinInfo))
        if(isAdmin){
          let ref = this.mrTailorDB.collection("/mrTailorAdmins").doc(user?.uid)
          ref.set({...userInfo, adminId:user?.uid})
          this.router.navigate(["/dashboard"]);
        }
        else{
          let ref = this.mrTailorDB.collection("/mrTailorClients").doc(user?.uid)
          ref.set({...userInfo, clientId:user?.uid, dateJoined: new Date().toDateString()})
          this.router.navigate(["/user_access"]);
        }
      },err=>{
        console.log(err.message)
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Oops...',
          text: 'هذا الايميل مسجل بالفعل',
          timer: 1500
        })
        
      })
    }

    // log out
    logOut(){
      this.mrTailorAuth.signOut().then(()=>{
        let loggedinInfo = {
          isLoggedIn:false,
          currentUserId:null,
          isAdmin:null
        }
        this.loggedInInfo.next(loggedinInfo)
        localStorage.setItem("mrTailorloggedInInfo", JSON.stringify(loggedinInfo))
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
