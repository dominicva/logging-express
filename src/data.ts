import { PropDescriptor } from './types';

const data: PropDescriptor[] = [
  { prop: 'baseUrl', desc: 'The URL path on which a router was mounted.' },
  { prop: 'path', desc: 'Contains the path part of the request URL.' },
  {
    prop: 'originalUrl',
    desc: `This is the express equivalent of req.url from Node's native http module. If you look at req.baseUrl and req.path, you'll see req.originalUrl is a combination of the two!`,
  },
  {
    prop: 'params',
    desc: `This property is an object containing properties mapped to the named route “parameters”.\nFor example, assume we specify the route /user/:id/:firstName/:isNewUser, and a user makes a request to /user/7/Erika/false. The req.param object should look like

  {
    id: '7',
    firstName: 'Erika',
    isNewUser: 'false'
  }\n\nNote that we receive all of the values as strings.\nFinally, req.params defaults to {}.`,
  },
  {
    prop: 'query',
    desc: `A "query string" is a way to add data to a url.\nYou may have seen a url like:\n\n\t?username=imcool&age=43\n\nProcessing this "syntax" is why we need "body parsers". We've seen them, but maybe not appreciated their purpose.\nEver seen this?\n\n\tapp.use(urlencoded())\n\nurlencoded() converts ?username=imcool&age=43 to an object that looks like

  {
    username: 'imcool',
    age: '43',
  }\n\nI highly recommend this wikipedia article: https://en.wikipedia.org/wiki/Query_string`,
  },
];

export = data;
