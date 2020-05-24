import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EnglishLevel } from '../../../../models/englishLevel';
import { SystemRoles } from '../../../../models/systemRoles';
import { enumSelector } from 'src/app/utils/enum.functions';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-quiz-user-profile',
  templateUrl: './quiz-user-profile.component.html',
  styleUrls: ['./quiz-user-profile.component.scss']
})
export class QuizUserProfileComponent implements OnInit {
  role;
  userProfile;
  userId: string;
  englishLevels = EnglishLevel;
  roles = SystemRoles;
  englishLevelKeys;
  roleKeys;
  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private userService:UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.userId = x.userId;
    });
    
    this.userService.getUserById(this.userId).subscribe(x => {
      this.userProfile = x;
    });

    this.englishLevelKeys = enumSelector(this.englishLevels);
    this.roleKeys = enumSelector(this.roles);
    this.role = SystemRoles[this.authService.role];
  }

  returnBackClick(){
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  saveUser(){
    this.userProfile.systemRole = this.role;
    console.log(this.role);
    console.log(this.userProfile);
    this.userService.putUserById(this.userId, this.userProfile);
  }

  disableUser(){
    this.userService.disableUserById(this.userId);
  }

}
