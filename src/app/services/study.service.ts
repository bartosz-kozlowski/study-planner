import { Injectable, signal } from '@angular/core';
import { StudyTopic } from '../models/study-topic.model';

@Injectable({ providedIn: 'root' })
export class StudyService {
  private readonly _topics = signal<StudyTopic[]>([]);

  constructor() {
    const saved = localStorage.getItem('topics');
    if (saved) this._topics.set(JSON.parse(saved));
  }

  get topics() {
    return this._topics.asReadonly();
  }

  addTopic(topic: StudyTopic) {
    this._topics.update((prev) => {
      const next = [...prev, topic];
      localStorage.setItem('topics', JSON.stringify(next));
      return next;
    });
  }

  toggleMastered(id: number) {
    this._topics.update((prev) => {
      const next = prev.map(t => t.id === id ? { ...t, mastered: !t.mastered } : t);
      localStorage.setItem('topics', JSON.stringify(next));
      return next;
    });
  }

  removeTopic(id: number) {
    this._topics.update((prev) => {
      const next = prev.filter(t => t.id !== id);
      localStorage.setItem('topics', JSON.stringify(next));
      return next;
    });
  }
}
