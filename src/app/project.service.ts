import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class ProjectService {

  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire, private router: Router) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  submit(project: Project) {
    this.projects.push(project);
    this.redirect();
  }

  redirect() {
    this.router.navigate(['./projects'])
  }
}
