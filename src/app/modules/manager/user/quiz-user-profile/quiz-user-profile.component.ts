import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-user-profile',
  templateUrl: './quiz-user-profile.component.html',
  styleUrls: ['./quiz-user-profile.component.scss']
})
export class QuizUserProfileComponent implements OnInit {
  userProfile;
  userId: string;
  constructor(private route: ActivatedRoute,
    private userService:UserService) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.userId = x.userId;
    });
    
    console.log(this.userId);
    this.userService.getUserById(this.userId).subscribe(x => {
      this.userProfile = x;
      console.log(this.userProfile);
    });
    
  }

  saveUser(){
    console.log(this.userProfile);
    this.userService.putUserById(this.userId, this.userProfile);
  }

}
