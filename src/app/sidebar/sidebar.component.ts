import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
// import { AlmostFundedPipe } from '../almost-funded.pipe';
import { ProjectListComponent } from '../project-list/project-list.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ProjectService]
})
export class SidebarComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService, private projectList: ProjectListComponent) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
