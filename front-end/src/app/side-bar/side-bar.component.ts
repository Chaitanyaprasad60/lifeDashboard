import { Component, OnInit, Input } from '@angular/core';


export type menuItem = {
  icon: string,
  name: string,
  route:any
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuList:menuItem[] =     
    [
      {"icon":"menu","name":"FirstName",route:""},
      {"icon":"analytics","name":"Analytics",route:""},
      {"icon":"person","name":"Users",route:""}
    ]

    @Input() menuState:boolean = true;
  


  constructor() { }

  ngOnInit(): void {
  }

}
