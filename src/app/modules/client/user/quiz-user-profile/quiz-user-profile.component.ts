import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { enumSelector } from 'src/app/utils/enum.functions';
import { SystemRoles } from 'src/app/models/systemRoles';
import { AuthService } from 'src/app/services/auth.service';
import { EnglishLevel } from '../../../../models/englishLevel'
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
    private userService: UserService,
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
    this.userService.putUserById(this.userId, this.userProfile);
  }

  disableUser(){
    this.userService.disableUserById(this.userId);
  }

}