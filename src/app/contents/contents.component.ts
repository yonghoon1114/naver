import { Component } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent {

  public isViewMenu: boolean = false;
  public newsMenu: number = 1;
  public ShoppingMenu: number = 1;
  public CurrentPage: number = 1;
  public PageMax: number = 4;
  public MaxShoppingMenu: number = 1;
  public seeMore : string = "언론사"
  public ContentMenu1: number=1;
  public ContentInside: number=1;
  public Expanded: number= 0;

  test() {
    this.isViewMenu = !this.isViewMenu;
  }
  page1(){
    this.newsMenu=1;
    this.PageMax=4;
    this.seeMore='언론사';
    
  }
  page2() {
    this.PageMax=21;
    this.newsMenu=2;
    this.seeMore='언론사';

  }
  page3() {
    this.PageMax=3;
    this.newsMenu=3;
    this.seeMore='연애소식';

  }
  page4() {
    this.PageMax=4;
    this.newsMenu=4;
    this.seeMore='스포츠 소식';

  }
  page5() {
    this.PageMax=5;
    this.newsMenu=5;
    this.seeMore='경제 소식';

  }

  NextPage(){
    this.CurrentPage++;
    if(this.CurrentPage>this.PageMax)
    {
      this.newsMenu++;
      this.CurrentPage=1;
    }
    if(this.newsMenu>5){
      this.newsMenu=1;
      this.CurrentPage=1;
    }
    if(this.newsMenu===1)
    {
      this.page1()
    }
    if(this.newsMenu===2)
    {
      this.page2()
    }
    if(this.newsMenu===3)
    {
      this.page3()
    }
    if(this.newsMenu===4)
    {
      this.page4()
    }
    if(this.newsMenu===5)
    {
      this.page5()
    }
  }
      
  PreviousPage(){
    this.CurrentPage--;
    if(this.CurrentPage<1)
    {
      this.newsMenu--;
      this.CurrentPage=1;
    }
    if(this.newsMenu<1)
    {
      this.newsMenu=5;
    }
    if(this.newsMenu===1)
    {
      this.page1()
    }
    if(this.newsMenu===2)
    {
      this.page2()
    }
    if(this.newsMenu===3)
    {
      this.page3()
    }
    if(this.newsMenu===4)
    {
      this.page4()
    }
    if(this.newsMenu===5)
    {
      this.page5()
    }
  
  }

  Expand(){
    this.Expanded=this.Expanded+1;
  }
}



