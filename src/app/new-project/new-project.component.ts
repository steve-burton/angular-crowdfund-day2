import { Component} from '@angular/core';
import { Project } from '../project.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent {

  constructor(private projectService: ProjectService) { }

  submit(name: string, groupNames: string, description: string, neededFunds: number, rewards: string) {
    var newProject: Project = new Project(name, groupNames, description, neededFunds, rewards)
    this.projectService.submit(newProject);
  }

}
