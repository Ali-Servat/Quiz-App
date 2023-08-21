import Parse from 'parse/dist/parse.min.js';
import appConfig from '../appConfig.json';

export default function configureParse() {
     const { appId, jsKey, serverURL } = appConfig.parse;

     Parse.initialize(appId, jsKey);
     Parse.serverURL = serverURL;
}
