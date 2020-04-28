import { Component, OnInit } from '@angular/core';
import { Chapter } from '../models/chapter';

@Component({
  selector: 'app-quiz-choose-chapter',
  templateUrl: './quiz-choose-chapter.component.html',
  styleUrls: ['./quiz-choose-chapter.component.scss']
})
export class QuizChooseChapterComponent implements OnInit {

  chapters: Chapter[] = [
    {
      name: "English Grammar - Past Simple Tense",
      level: "Beginner"
    },
    {
      name: "English Grammar - Past Simple Tense",
      level: "Beginner"
    },
    {
      name: "English Grammar - Past Simple Tense",
      level: "Beginner"
    },
    {
      name: "English Grammar - Past Simple Tense",
      level: "Beginner"
    },
    {
      name: "English Grammar - Past Simple Tense",
      level: "Beginner"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
