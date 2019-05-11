class API {
  async request() {
   let dog = await fetch("https://us-central1-polly-issue-demo.cloudfunctions.net/respond", {
     headers: {
       'Accept-Encoding': 'gzip',
       'Origin': '*'
     }
   });
   let cat = await dog.json();
   console.log(cat)
  }
}

export default new API();
