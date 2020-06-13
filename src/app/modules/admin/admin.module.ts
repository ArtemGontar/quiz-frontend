import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizUserProfileComponent } from './user/quiz-user-profile/quiz-user-profile.component';
import { QuizChooseQuizComponent } from './quiz/quiz-choose-quiz/quiz-choose-quiz.component';
import { QuizChooseChapterComponent } from './quiz/quiz-choose-chapter/quiz-choose-chapter.component';
import { QuizUserListComponent } from './user/quiz-user-list/quiz-user-list.component';
import { QuizAddQuizComponent } from './quiz/quiz-add-quiz/quiz-add-quiz.component';
import { QuizAddChapterComponent } from './quiz/quiz-add-chapter/quiz-add-chapter.component';
import { AdminRoutingModule } from './admin.routing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { QuizEditChapterComponent } from './quiz/quiz-edit-chapter/quiz-edit-chapter.component';
import { QuizEditQuizComponent } from './quiz/quiz-edit-quiz/quiz-edit-quiz.component';

@NgModule({
  declarations: [
    QuizChooseChapterComponent,
    QuizChooseQuizComponent,
    QuizAddQuizComponent,
    QuizAddChapterComponent,
    QuizUserProfileComponent,
    QuizUserListComponent,
    QuizEditChapterComponent,
    QuizEditQuizComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ToastrModule,
    NgxPermissionsModule.forChild({
       permissionsIsolate: true, 
       configurationIsolate: true,
       rolesIsolate: true})
  ]
})
export class AdminModule { }
