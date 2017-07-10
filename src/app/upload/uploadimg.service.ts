import { Injectable } from '@angular/core';
import { Imgupload } from './imgupload';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UploadimgService {

  constructor(private db: AngularFireDatabase) { }

  pushUpload(imgupload: Imgupload){
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`test/${imgupload.file.name}`).put(imgupload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot)=>{
      //uploading
      imgupload.progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
    },
    (error)=>{
      //upload failed
      console.log(error)
    },
    ()=>{
      //upload success
      imgupload.url = uploadTask.snapshot.downloadURL
      imgupload.name = imgupload.file.name

    }
    );
    
    
  }

}