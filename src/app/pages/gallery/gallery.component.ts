import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from '@angular/fire/storage';
import { FileService } from '../../services/fileservice';

@Component({
  selector: "app-gallery",
  templateUrl: "gallery.component.html"
})
export class GalleryComponent implements OnInit {
  nbrImages = 0
 
  //constructor() { }
  constructor(private storage: AngularFireStorage, private fileService: FileService) { }

  ngOnInit() {
    this.fileService.getImageDetailList();
    this.nbrImages = this.fileService.imageDetailList.set.length
  }
}
