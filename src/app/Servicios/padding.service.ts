import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaddingService {
  private addPaddingSource = new BehaviorSubject<boolean>(false);

  constructor() {}

  enablePadding() {
    this.addPaddingSource.next(true);
  }

  disablePadding() {
    this.addPaddingSource.next(false);
  }

  get paddingStatus() {
    return this.addPaddingSource.asObservable();
  }
}
