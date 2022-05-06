const reqDataCompose = expressRequest => data => {
  return data.map(({ prop, desc }) => ({
    name: `req.${prop}`,
    value: expressRequest[prop],
    description: desc,
  }));
};

module.exports = reqDataCompose;
