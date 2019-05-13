class API {
  async request() {
   let response = await fetch("https://us-central1-polly-issue-demo.cloudfunctions.net/respond", {
     headers: {
       'Accept-Encoding': 'gzip',
       'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
       'Origin': '*'
     }
   });
   console.log(response); //COMES BACK PROPERLY IN JEST TESTS WITH 200 RESPONSE STATUS
   console.log(response.headers);
   console.log('DATA IS HERE', await response.json()); //DOES NOT RESOLVE IN JEST TESTS
  }
}

export default new API();
