import {NgModule} from '@angular/core';
import {MainComponent} from "./main.component";
import {RouterModule} from "@angular/router";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import { SerachAreaComponent } from '../serach-area/serach-area.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { ContentsComponent } from '../contents/contents.component';
@NgModule({
    imports: [
      RouterModule.forChild([
        // 기본 맵 윈도우 오픈
        {
          path: '',
          redirectTo: '',
          pathMatch: 'full',
        },
        // 기본 맵 윈도우 오픈
        {
          path: '',
          component: MainComponent,
        },
      ]),
      NgForOf,
      NgIf,
      NgClass
    ],
    declarations: [
      MainComponent,
      SerachAreaComponent,
      TopMenuComponent,
      ContentsComponent
    ]
  })
  export class MainModule { }
  