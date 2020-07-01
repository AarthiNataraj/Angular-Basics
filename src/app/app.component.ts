import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ShareService } from './share.service';
import { StateService } from './state.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  public message = 'Message from Parent';
  public childMessage = '';
  @ViewChild(ChildComponent, {static: false}) child;
  //child is a user defined variable

  constructor
    (private shareService: ShareService,
    private state:StateService
    ) { }

  ngAfterViewInit() {
    // parent <=> child communication
    // this.shareService.currentMessage.subscribe((data) => {
    // console.log('Parent Share Message', data);

    // });
    this.state.set(this.state.data.username, 'Aarthi');

   // this.childMessage = this.child.childtoparent;
    //console.log(this.child.childtoparent);

    }

    receiveMsg($event){
      console.log($event);
  }
}
