import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-serach-area',
  templateUrl: './serach-area.component.html',
  styleUrls: ['./serach-area.component.scss']
})
export class SerachAreaComponent {
  public seemore: boolean = false;

  SeeMore(event: MouseEvent){
    this.seemore = !this.seemore
  }
}
