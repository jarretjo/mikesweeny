import { Component } from "@angular/core";
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
   ref: AngularFireStorageReference;
   task: AngularFireUploadTask;
   uploadProgress: Observable<number>;
   downloadURL: Observable<string>;
   id: string;
  //title = "black-dashboard-angular Joe was here";

   constructor(private afStorage: AngularFireStorage) {}

   upload(event){
      this.id= Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(this.id);
      this.task = this.ref.put(event.target.files[0]);
      this.uploadProgress = this.task.percentageChanges();
      this.downloadURL = this.ref.getDownloadURL();
      //this.downloadURL = this.afStorage.ref('myURL/'+this.id).getDownloadURL();

   }
}
