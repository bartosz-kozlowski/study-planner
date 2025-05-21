import { Component } from '@angular/core';
import { TopicFormComponent } from './components/topic-form/topic-form.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopicFormComponent, TopicListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Study Planner';
}
