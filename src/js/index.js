// import emails from './email-data.json'

export class Index {

    constructor(){
      // console.log(emails.length);
      const url = './src/js/email-data.json'
      fetch(url).then(r => r.json())
      .then(emails => console.log(emails.length))
    }
  };
  document.addEventListener('DOMContentLoaded', () => {
    new Index()
  });