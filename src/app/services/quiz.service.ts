import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../models/environment';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private URL: string = environment.QuizApiUrl;
  constructor(private http: HttpClient) {

  }

  getChapters() {
    return this.http.get(this.URL + 'api/chapters');
  }

  addChapter(chapter) {
    this.http.post(this.URL + 'api/chapters', chapter);
  }

  deleteChapter(chapterId) {
    this.http.delete(this.URL + 'api/chapters', chapterId);
  }

  
  getQuizzes() {
    return this.http.get(this.URL + 'api/quizzes');
  }

  addQuiz(quiz) {
    this.http.post(this.URL + 'api/quizzes', quiz);
  }

  deleteQuiz(quizId) {
    this.http.delete(this.URL + 'api/quizzes', quizId);
  }

  getQuizzesByChapterId(chapterId)
  {
    return this.http.get(this.URL + `api/chapters/${chapterId}/quizzes`);
  }


  getQuestions() {
    return this.http.get<Question>(this.URL + 'api/question');
  }

  getQuestionsByQuizId(quizId)
  {
    return this.http.get(this.URL + `api/quizzes/${quizId}/questions`);
  }

  postQuizResults(quizId, quizResults)
  {
    this.http.post(this.URL + `api/quizzes/${quizId}/result`, quizResults.answers).subscribe(x => x)
  }
}
