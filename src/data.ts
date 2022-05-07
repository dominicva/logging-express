module.exports = [
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
    desc: `A "query string" is one way to communicate data within a url.\nYou may have seen a url including something like:\n\n\t?username=imcool&age=1431&isLiar=true\n\nProcessing this "syntax" is why we need body parsing middleware. We've all seen it, but maybe not understood its exact time of need.\nEver seen this in a server file?\n\n\tapp.use(urlencoded())\n\nurlencoded() is a function that will convert ?username=imcool&age=1431&isLiar=true on an incoming url to an object that looks like

  {
    username: 'imcool',
    age: '1431',
    isLiar: 'true'
  }\n\nI highly recommend this wikipedia article: https://en.wikipedia.org/wiki/Query_string`,
  },
];
