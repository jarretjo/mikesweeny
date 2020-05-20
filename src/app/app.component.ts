import { Component } from "@angular/core";
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
   ref: AngularFireStorageReference;
   task: AngularFireUploadTask;
  //title = "black-dashboard-angular Joe was here";

   constructor(private afStorage: AngularFireStorage) {}

   upload(event){
      const id= Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(id);
      this.task = this.ref.put(event.target.files[0]);
   }
}
