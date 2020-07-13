import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent  {

  events = []
  constructor(private _eventService: EventService) {
    

    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )

  }
/*   url = 'http://localhost:3001';
  public transform(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url); */
}

/*   ngOnInit() {

    this.safeurl = this._sanitizer.bypassSecurityTrustUrl('http://localhost:3001')

    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )

        } */

    

