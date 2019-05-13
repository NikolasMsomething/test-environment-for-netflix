import API from './ApiUtil';
import { setupPollyInTestFile } from '../tests/TestUtil';

setupPollyInTestFile();

it('fetches gzipped response and makes a proper polly recording', async () => {
   let dog = await API.request();
});
