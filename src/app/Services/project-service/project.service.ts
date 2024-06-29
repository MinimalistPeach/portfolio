import { Injectable } from '@angular/core';
import { ProjectDTO } from '../../Models/ProjectDTO';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  public getBadgeLink(tech: string): string
  {
    return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'+tech+'/'+tech+'-original.svg';
  }
}
