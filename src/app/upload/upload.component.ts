import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { UploadimgService } from './uploadimg.service';
import { Imgupload } from './imgupload';
import * as _ from "lodash";
import * as firebase from 'firebase';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  cates: FirebaseListObservable<any[]>;

  suppliers: FirebaseListObservable<any[]>;

  pID:string;
  pCate="Accessories";

  private prdImgUrls: FirebaseListObservable<any[]>;

  currentUpload: Imgupload;
  dropzoneActive: boolean = false;

  constructor(public afAuth:AngularFireAuth,public af:AngularFireDatabase, private uploadService: UploadimgService) {
    this.cates = af.list('/ProductCategory');
    this.suppliers = af.list('/Supplers');
  }

  dropzoneState($event: boolean){
    this.dropzoneActive = $event;
  }

  handleDrop(fileList: FileList) {
    let fileIndex = _.range(fileList.length)

    _.each(fileIndex,(idx)=>{
      this.currentUpload = new Imgupload(fileList[idx],this.pCate,this.pID);
      this.uploadService.pushUpload(this.currentUpload);
      this.prdImgUrls = this.af.list(`zIMGTEMPURLS/${this.pCate}/${this.pID}`);
    })
  }

  removeFromList(key:string,url:string){
    let imgRef = firebase.storage().refFromURL(url);
    imgRef.delete().then(()=>{
      this.prdImgUrls.remove(key);
      //this.af.list(`zIMGTEMPURLS/${this.pCate}/${this.pID}`).remove(key);
    }).catch(error=>console.log(error));
  }

  ngOnInit() {
  }

}
