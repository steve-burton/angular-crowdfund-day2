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

  remainingFunds(project: Project) {
    project.remainingFunds = project.neededFunds;
    return project;
  }

  redirect() {
    this.router.navigate(['./projects'])
  }

  getProjectByKey(projKey: string) {
    return this.angularFire.database.object('projects/' + projKey)
  }

  updateProject(project) {
    var updatedProject = this.getProjectByKey(project.$key);
    updatedProject.update({name: project.name, groupNames: project.groupNames, description: project.description, neededFunds: project.neededFunds, rewards: project.rewards})
  }

  deleteProject(localProjectToDelete) {
    var projectInFirebase = this.getProjectByKey(localProjectToDelete.$key);
    projectInFirebase.remove();
  }

  donate(project, value) {
    var newvalue = parseInt(value)
    console.log(newvalue);
    var newProject;
    project.subscribe(i => newProject = i)
    var updatedProject = this.getProjectByKey(newProject.$key);

    var remFunds = newProject.remainingFunds -= newvalue;
    var collectedFunds = newProject.collectedFunds += newvalue;
    // debugger;


    updatedProject.update({collectedFunds: collectedFunds, remainingFunds: remFunds});
  }
}
