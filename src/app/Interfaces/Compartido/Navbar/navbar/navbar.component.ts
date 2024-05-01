import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import { Router, Event as RouterEvent, NavigationEnd } from '@angular/router';
import { PaddingService } from '../../../../Servicios/padding.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLandingPage: boolean = true;
  shouldBeFixed: boolean = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef, private paddingService: PaddingService) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLandingPage = event.url === '/' || event.url.includes('/home');
      this.shouldBeFixed = event.url.includes('/home');
      this.cdr.detectChanges();
      console.log("shouldBeFixed:", this.shouldBeFixed);
    });
  }

  onServiciosClick() {
    this.paddingService.enablePadding();
    window.scrollTo({
      top: document.getElementById('Servicios-Landing')?.offsetTop ?? 0,
      behavior: 'smooth'
    });
  }

  onEquipoClick() {
    this.paddingService.enablePadding();
    window.scrollTo({
      top: document.getElementById('Equipo-Trabajo')?.offsetTop ?? 0,
      behavior: 'smooth'
    });
  }

  onSoporteClick() {
    this.paddingService.enablePadding();
    window.scrollTo({
      top: document.getElementById('Soporte')?.offsetTop ?? 0,
      behavior: 'smooth'
    });
  }
}

