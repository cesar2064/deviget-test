import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(comingNumber: number): any {
    let now = new Date().getTime();
    let value = new Date(comingNumber);
    let result: string;
    // time since message was sent in seconds
    let delta = (now - value.getTime()) / 1000;

    // format string
    if (delta < 10) {
      result = 'just now';
    }
    else if (delta < 60) { // sent in last minute
      result = Math.floor(delta) + ' seconds ago';
    }
    else if (delta < 3600) { // sent in last hour
      result = Math.floor(delta / 60) + ' minutes ago';
    }
    else if (delta < 86400) { // sent on last day
      result = Math.floor(delta / 3600) + ' hours ago';
    }
    else { // sent more than one day ago
      result = Math.floor(delta / 86400) + ' days ago';
    }
    return result;
  }

}
