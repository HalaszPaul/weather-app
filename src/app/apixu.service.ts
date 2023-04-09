import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: string){
    return this.http.get(
        'https://api.apixu.com/v1/current.json?key=67755f14ff49e8cce8d732da29319af5/' + location
    );
  }
}