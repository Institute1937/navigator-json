import emails from './email-data.json'

export class Index {

    constructor(){
      console.log(emails.length);
    }
  };
  document.addEventListener('DOMContentLoaded', () => {
    new Index()
  });