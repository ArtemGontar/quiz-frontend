import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { EnglishLevel } from '../../../../models/englishLevel';

@Component({
  selector: 'app-quiz-user-list',
  templateUrl: './quiz-user-list.component.html',
  styleUrls: ['./quiz-user-list.component.scss']
})
export class QuizUserListComponent implements OnInit {

  constructor(private userService:UserService) { }
  users;
  englishLevels = EnglishLevel;
  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
