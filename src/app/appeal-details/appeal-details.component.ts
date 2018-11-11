import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-appeal-details',
  templateUrl: './appeal-details.component.html',
  styleUrls: ['./appeal-details.component.css']
})
export class AppealDetailsComponent implements OnInit {

  title = 'Angular 4 Project!';
   todaydate;
   componentproperty;
   emailid;
   formdata;
   constructor() { }
   ngOnInit() {

      this.formdata = new FormGroup({
         emailid: new FormControl("angular@gmail.com",Validators.required),
         passwd: new FormControl("abcd1234",Validators.required)
      });
   }
   onClickSubmit(data) {this.emailid = data.emailid;}
}
