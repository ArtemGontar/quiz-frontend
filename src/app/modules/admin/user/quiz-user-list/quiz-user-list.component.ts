import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { EnglishLevel } from '../../../../models/englishLevel';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-quiz-user-list',
  templateUrl: './quiz-user-list.component.html',
  styleUrls: ['./quiz-user-list.component.scss']
})
export class QuizUserListComponent implements OnInit {

  constructor(private userService:UserService,
    private toastr: ToastrService) {
    }

  users;
  englishLevels = EnglishLevel;
  ngOnInit() {
    this.userService.getUsers()
    .subscribe(data => this.users = data,
      err => this.toastr.success('Get users failed'));
    ;
  }

}
