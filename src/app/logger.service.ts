// Simple console.log service created.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  message(message): void {
    console.log(message);
  }
  warning(warning: string): void {
    console.warn(warning);
  }
  error(error: string): void {
    console.error(error);
  }
}
