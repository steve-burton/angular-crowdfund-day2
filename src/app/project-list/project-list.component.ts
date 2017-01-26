import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { EditProjectComponent } from '../edit-project/edit-project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {

  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  projectNavigation(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key])
  }
}
