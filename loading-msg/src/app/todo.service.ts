import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient, private loaderService: LoaderService) { 
  }

  getTodos() {
    this.loaderService.setMessage('Loading todos...');
    return this.http.get(this.apiUrl);
  }
}
