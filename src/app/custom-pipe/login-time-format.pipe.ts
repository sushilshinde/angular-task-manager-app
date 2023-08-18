import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loginTimeFormat'
})
export class LoginTimeFormatPipe implements PipeTransform {
  transform(loginTime: Date, format: '12' | '24'): string {
    const hours = loginTime.getHours();
    const minutes = loginTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = format === '12' ? (hours % 12 || 12) : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${format === '12' ? ampm : ''}`;
  }
}
