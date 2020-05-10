import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service'
import { Observable } from 'rxjs' 
@Component({
  selector: 'app-quiz-choose-chapter',
  templateUrl: './quiz-choose-chapter.component.html',
  styleUrls: ['./quiz-choose-chapter.component.scss'],
  providers: [QuizService]
})
export class QuizChooseChapterComponent implements OnInit {

  chapters: Observable<any>;
  constructor(private quizService: QuizService) { }
  
  ngOnInit() {
    this.chapters = this.quizService.getChapters();
  }

  deleteChapter(chapterId){
    console.log("delete chapter " + chapterId);
    //this.quizService.deleteChapter(chapterId);
  }
}
