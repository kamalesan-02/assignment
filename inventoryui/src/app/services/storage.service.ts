import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  private getItem(key: string): any {
    return localStorage.getItem(key);
  }

  getItemAsJSON(key: string): any {
    let item = this.getItem(key);
    item = item == null ? '{}' : item;
    return JSON.parse(item);
  }
 private removeItem(key: string){
  localStorage.removeItem(key);
 }
 endSession(): void{
  this.removeItem('userInfo')
 }
}
