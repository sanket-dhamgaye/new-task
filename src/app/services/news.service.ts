import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}
  getLatestNews() {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?language=en&apiKey=d948c11e91b04de9bbcd5bb0065a395c"
    );
  }
  CategoryNews(category) {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?category="+category+"&country=in&apiKey=d948c11e91b04de9bbcd5bb0065a395c"
    );
  }
  CountryNews() {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=d948c11e91b04de9bbcd5bb0065a395c"
    );
  }
}
