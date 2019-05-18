import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], args?: any): any[] {
    let searchText = args.toLowerCase().trim();
    if (searchText == "") {
      return value;
    } else {
      return value.filter(
        val => val.title.toLowerCase().indexOf(searchText) > -1
      );
    }
  }
}
