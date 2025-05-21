import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudyService } from '../../services/study.service';
import { StudyTopic } from '../../models/study-topic.model';

@Component({
  selector: 'app-topic-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss']
})
export class TopicFormComponent {
  subject = '';
  title = '';
  description = '';

  constructor(private studyService: StudyService) {}

  addTopic() {
    if (!this.subject.trim() || !this.title.trim()) return;

    const newTopic: StudyTopic = {
      id: Date.now(),
      subject: this.subject,
      title: this.title,
      description: this.description,
      mastered: false
    };

    this.studyService.addTopic(newTopic);
    this.subject = '';
    this.title = '';
    this.description = '';
  }
}
