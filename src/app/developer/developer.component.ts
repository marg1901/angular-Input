import { Component } from '@angular/core';
import { Developer } from '../Model/developer.model';
import { Skill } from '../Model/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
 developer: Developer = new Developer('Moi', 'Moi', 35, "Ahaha", "Feminin", [
new Skill("skill1", "logo1", "site1"),
new Skill("skill2", "logo2", "site2"),
 ])
}
