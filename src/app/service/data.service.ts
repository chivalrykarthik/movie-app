import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
  routeconst = {
    'api_Key': 'api_key=8f5ecc67d725eda11fb8ef6bf236586d',
    'baseUrl': 'https://api.themoviedb.org/3/movie/',
    'baseUrlSearch': "https://api.themoviedb.org/3/search/movie",
    'upcoming': 'upcoming',
    'popular': 'popular',
    'recommendations': 'recommendations'
  };

  constructor(private http: Http) { }

  public getData() {
    return this.http.get("/home").map(res => res.json());
  }


  public getTrendingMovies() {
    let formatUrl = this.routeconst.baseUrl + this.routeconst.popular + '?' + this.routeconst.api_Key;
    return this.http.get(formatUrl).map(res => res.json());
  }

  public getUpcomingMovies() {
    let formatUrl = this.routeconst.baseUrl + this.routeconst.upcoming + '?' + this.routeconst.api_Key;
    return this.http.get(formatUrl).map(res => res.json());
  }

  public searchMovies(key) {
    return this.http.get("/search/" + key).map(res => res.json());
  }

  public searchMoviesByName(key) {
    let formatUrl = this.routeconst.baseUrlSearch + '?' + this.routeconst.api_Key + "&query=" + key + "&include_adult=true";
    return this.http.get(formatUrl).map(res => res.json());
  }
  public addRecommendation(movie) {
    return this.http.post("/recommendation", movie).map(res => res.json());
  }

  public deleteRecommendation(movie) {
    return this.http.delete("/recommendation", { body: movie }).map(res => res.json());
  }

  public getRecommendation() {
    //https://api.themoviedb.org/3/movie/100/recommendations?api_key=8f5ecc67d725eda11fb8ef6bf236586d&language=en-US&page=1
    let formatUrl = this.routeconst.baseUrl + '597/' + this.routeconst.recommendations + '?' + this.routeconst.api_Key;
    //return this.http.get("/recommendation").map(res => res.json());
    return this.http.get(formatUrl).map(res => res.json());
  }
}