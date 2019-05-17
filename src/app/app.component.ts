import { Component, OnInit, ViewChild } from "@angular/core";
import { NewsService } from "./services/news.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("newsModal") newsModel;
  title = "news-task";
  newsData = [];
  newsUrl: SafeResourceUrl;
  modalTitle: string;
  constructor(
    private newsService: NewsService,
    private sanitized: DomSanitizer
  ) {}
  ngOnInit() {
    this.getLatest();
    this.newsUrl = this.sanitized.bypassSecurityTrustResourceUrl(
      "http://localhost:4200"
    );
  }
  getLatest() {
    this.newsService.getLatestNews().subscribe((latestNews: any) => {
      this.newsData = latestNews.articles;
      console.log(this.newsData);
    });
  }
  getCountryNews(code) {
    this.newsService.CountryNews().subscribe((countryNews: any) => {
      this.newsData = countryNews.articles;
      console.log(countryNews);
    });
  }
  getCategoryNews(category) {
    this.newsService.CategoryNews(category).subscribe((categoryNews: any) => {
      this.newsData = categoryNews.articles;
      console.log(categoryNews);
    });
  }
  modelShow(index: number) {
    this.newsUrl = this.sanitized.bypassSecurityTrustResourceUrl(
      this.newsData[index].url
    );
    this.modalTitle = this.newsData[index].title;
    this.newsModel.show();
  }
}
