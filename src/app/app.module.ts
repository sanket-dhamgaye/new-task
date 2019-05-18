import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
// import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TimeAgoPipe } from "./pipes/time-ago.pipe";
import { LoaderComponent } from "./loader/loader.component";
import { SearchPipe } from "./pipes/search.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, TimeAgoPipe, LoaderComponent, SearchPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
