import { Component, OnInit, ViewChild } from "@angular/core";
import { NewsService } from "./services/news.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("flyInOut", [
      state("in", style({ transform: "translateX(0)" })),
      transition("void => *", [
        style({ transform: "translateX(-100%)" }),
        animate(500)
      ]),
      transition("* => void", [
        animate(500, style({ transform: "translateX(100%)", opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  @ViewChild("newsModal") newsModel;
  title = "news-task";
  newsData = [];
  newsUrl: SafeResourceUrl;
  modalTitle: string;
  activeLink: string;
  loading = false;
  searchTxt = "";
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
  getLatest(code = "latest") {
    this.loading = false;
    this.newsService.getLatestNews().subscribe((latestNews: any) => {
      this.newsData = latestNews.articles;
      this.loading = true;
    });
    this.activeLink = code;
  }
  getCountryNews(code) {
    this.loading = false;
    this.newsService.CountryNews().subscribe((countryNews: any) => {
      this.newsData = countryNews.articles;
      this.loading = true;
    });
    this.activeLink = code;
  }
  getCategoryNews(category) {
    this.loading = false;
    this.newsService.CategoryNews(category).subscribe((categoryNews: any) => {
      this.newsData = categoryNews.articles;
      this.loading = true;
    });
    this.activeLink = category;
  }
  modelShow(index: number) {
    this.newsUrl = this.sanitized.bypassSecurityTrustResourceUrl(
      this.newsData[index].url
    );
    this.modalTitle = this.newsData[index].title;
    this.newsModel.show();
  }
}
