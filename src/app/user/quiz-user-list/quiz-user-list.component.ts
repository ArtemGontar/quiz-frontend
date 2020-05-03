import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-quiz-user-list',
  templateUrl: './quiz-user-list.component.html',
  styleUrls: ['./quiz-user-list.component.scss']
})
export class QuizUserListComponent implements OnInit {

  constructor(private userService:UserService) { }
  users;
  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
