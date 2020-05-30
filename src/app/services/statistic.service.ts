import { Injectable } from '@angular/core';
import { environment } from '../models/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private URL: string = environment.StatisticUrl;
  constructor(private http: HttpClient) {

  }

  getQuizStatistic(quizId){
    return this.http.get(this.URL + `api/statistics/quizzes/${quizId}`);
  }

  getUserStatistic(userId){
    return this.http.get(this.URL + `api/statistics/users/${userId}`);
  }

  getUserStatisticByQuiz(userId, quizId){
    return this.http.get(this.URL + `api/statistics/users/${userId}/quizzes/${quizId}`);
  }

}
