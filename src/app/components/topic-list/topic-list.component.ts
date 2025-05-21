import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyService } from '../../services/study.service';
import { StudyTopic } from '../../models/study-topic.model';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent {
  filter = signal<'all' | 'mastered' | 'unmastered'>('all');

  constructor(private studyService: StudyService) {}

  topics = computed(() => {
    const all = this.studyService.topics();
    switch (this.filter()) {
      case 'mastered': return all.filter(t => t.mastered);
      case 'unmastered': return all.filter(t => !t.mastered);
      default: return all;
    }
  });

  toggleMastered(id: number) {
    this.studyService.toggleMastered(id);
  }

  removeTopic(id: number) {
    this.studyService.removeTopic(id);
  }

  setFilter(f: 'all' | 'mastered' | 'unmastered') {
    this.filter.set(f);
  }
}
