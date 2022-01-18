import { Component, OnInit } from '@angular/core';
import { ProfileconverterService } from '../profileconverter.service';

//@component is settings for the component and pointers to the other parts of the component
@Component({
  selector: 'app-temp',
  templateUrl: './profile.component.html'//,
  //styleUrls: ['./temp.component.css']
})

//a bulk of your time with components will be spent in the component class
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileconverterService) { }
    username:string = "test";
    contact:string = "test@test.com";
    bio:string = "this is a bio";


  ngOnInit(): void {
  }

  updateInput(){
    this.username = (<HTMLInputElement>document.getElementById("InputName")).value;
    this.contact = (<HTMLInputElement>document.getElementById("InputContact")).value;
    this.bio = (<HTMLInputElement>document.getElementById("InputBio")).value;
  }


}
