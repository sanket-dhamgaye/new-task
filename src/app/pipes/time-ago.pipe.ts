import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timeAgo"
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    // console.log(value);
    const newDate = new Date().getTime();
    const oldDate = new Date(value).getTime();
    const seconds: number = Math.floor((newDate - oldDate) / 1000);
    let intervalType: string;

    let interval: any = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      intervalType = "year";
    } else {
      interval = Math.floor(seconds / (60 * 60 * 24 * 30));
      if (interval >= 1) {
        intervalType = "month";
      } else {
        interval = Math.floor(seconds / (60 * 60 * 24));
        if (interval >= 1) {
          intervalType = "day";
        } else {
          interval = Math.floor(seconds / (60 * 60));
          if (interval >= 1) {
            intervalType = "hour";
          } else {
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
              intervalType = "minute";
            } else {
              interval = "few";
              intervalType = "second";
            }
          }
        }
      }
    }

    if (interval > 1 || interval === 0) {
      intervalType += "s";
    }

    return interval + " " + intervalType + " ago";
    // return value;
  }
}
