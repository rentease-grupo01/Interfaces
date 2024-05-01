import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaddingService } from '../../../../Servicios/padding.service';

@Component({
  selector: 'app-parte1',
  templateUrl: './parte1.component.html',
  styleUrls: ['./parte1.component.css']
})
export class Parte1Component implements OnInit, OnDestroy {
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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const threshold = document.getElementById('Servicios-Landing')?.offsetTop ?? 0;
    const currentScroll = window.pageYOffset + this.getNavbarHeight();

    if (currentScroll >= threshold) {
      this.paddingService.enablePadding();
    } else {
      this.paddingService.disablePadding();
    }
  }

  private getNavbarHeight(): number {
    const navbar = document.querySelector('.navbar');
    return navbar ? navbar.clientHeight : 0;
  }
}
