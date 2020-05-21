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

  getQuizStatistic(guizId){
    
  }
}
