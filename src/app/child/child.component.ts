import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShareService } from '../share.service';
import { StateService } from '../state.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<string>();
  public childtoparent = 'I am from child component';
  constructor
  (private shareService: ShareService,
   private state: StateService) { }
  clickFunction()
  {
    //this.messageEvent.emit('Message Emitted From Child');
    //this.shareService.changeMessage('Button Clicked So Trigger Emission');
    console.log(this.state.get(this.state.data.username));

  }
  ngOnInit()  {
      //console.log(this.childMessage);
      this.shareService.currentMessage.subscribe((data) => {
      console.log('Share Child Message', data);

      });
  }

}
