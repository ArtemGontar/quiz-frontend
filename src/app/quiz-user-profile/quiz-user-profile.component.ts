import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../models/userProfile'

@Component({
  selector: 'app-quiz-user-profile',
  templateUrl: './quiz-user-profile.component.html',
  styleUrls: ['./quiz-user-profile.component.scss']
})
export class QuizUserProfileComponent implements OnInit {
  userProfile: UserProfile = {
    firstName: "Artem",
    lastName: "Hontar",
    email: "artemgontar16@gmail.com",
    phoneNumber: "+375336908137",
    englishLevel: "Intermideate",
    birthDate: "1999-04-30",
    departament: "dotnet",
    jobTitle: "developer",
    systemRole: "admin"
  }
  constructor() { }

  ngOnInit() {
  }

}
