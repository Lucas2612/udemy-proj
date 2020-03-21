import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  writeLog(text) {
    console.log(text);
  }

}
