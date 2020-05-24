import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../../services/quiz.service'
import { Observable } from 'rxjs' 
import { AuthService } from 'src/app/services/auth.service';
import { EnglishLevel } from '../../../../models/englishLevel';

@Component({
  selector: 'app-quiz-choose-chapter',
  templateUrl: './quiz-choose-chapter.component.html',
  styleUrls: ['./quiz-choose-chapter.component.scss'],
  providers: [QuizService]
})
export class QuizChooseChapterComponent implements OnInit {

  chapters: Observable<any>;
  englishLevels = EnglishLevel;
  constructor(private authService: AuthService, private quizService: QuizService) { }
  
  ngOnInit() {
    this.chapters = this.quizService.getChaptersByOwner();
    this.authService.loadPermissions([this.authService.role]);
  }

  deleteChapter(chapterId){
    this.quizService.deleteChapter(chapterId);
  }
}
