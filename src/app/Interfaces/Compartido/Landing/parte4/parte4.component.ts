import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaddingService } from '../../../../Servicios/padding.service';

@Component({
  selector: 'app-parte4',
  templateUrl: './parte4.component.html',
  styleUrls: ['./parte4.component.css']
})
export class Parte4Component implements OnInit, OnDestroy {
  addPadding = false;
  private subscriptions: Subscription = new Subscription();

  constructor(private paddingService: PaddingService) {}

  ngOnInit() {
    this.subscriptions.add(this.paddingService.paddingStatus.subscribe(status => {
      this.addPadding = status;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
