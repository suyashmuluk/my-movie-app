import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageserviceService {

  constructor() { }

  store(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }
}
