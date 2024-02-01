import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private message: string = "Loading..."
  private loading: boolean = false;
  constructor() { }

  setLoading(loading: boolean) {
    console.log('set loading', loading);
    this.loading = loading;
  }

  getLoading() {
    console.log('get loading', this.loading);
    return this.loading;
  }

  getMessage() {
    console.log('get message', this.message);
    return this.message;
  }

  setMessage(message: string) {
    console.log('set message', message);
    this.message = message;
  }
}
