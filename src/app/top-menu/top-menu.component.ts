import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  
  public OpenMenu: boolean = false;

  public contents: string[] = [
    "회사소개", "인재채용", "제휴제안", "이용약관", "개인정보처리방침", "청소년보호정책"
  ];
  
  ClickMenu(){
    
    this.OpenMenu=!this.OpenMenu;

  }
}
