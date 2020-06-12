import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { EnglishLevel } from '../../../../models/englishLevel';
import { ToastrService } from 'ngx-toastr';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-quiz-user-list',
  templateUrl: './quiz-user-list.component.html',
  styleUrls: ['./quiz-user-list.component.scss']
})
export class QuizUserListComponent implements OnInit {
  displayedColumns: string[] = 
  ['name',
  'email',
  'phoneNumber',
  'englishLevel'];

  dataSource :MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private userService:UserService,
    private toastr: ToastrService) {
    }

  users;
  englishLevels = EnglishLevel;
  ngOnInit() {
    this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(this.users) 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
      err => this.toastr.success('Get users failed'));
    ;
  }

}
