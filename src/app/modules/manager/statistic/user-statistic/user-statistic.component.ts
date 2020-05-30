import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StatisticService } from 'src/app/services/statistic.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { EnglishLevel } from '../../../../models/englishLevel';

@Component({
  selector: 'app-user-statistic',
  templateUrl: './user-statistic.component.html',
  styleUrls: ['./user-statistic.component.scss']
})
export class UserStatisticComponent implements OnInit {

  userIdSubscription: Subscription;
  userStatistic = {};
  englishLevels = EnglishLevel;
  data = [95, 89, 70, 61, 56, 55, 40];
  labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  
  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private statisticService: StatisticService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.userIdSubscription = this.authService.authNavId$
    .subscribe(id => {
      this.statisticService.getUserStatistic(id)
      .subscribe(statistic => {
        this.userStatistic = statistic;
        this.spinner.hide();
      },
        err => this.toastr.error(err));
    });
  }

}
