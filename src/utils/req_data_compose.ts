export default function reqDataCompose(expressRequest) {
  return function (data) {
    return data.map(({ prop, desc }) => ({
      name: `req.${prop}`,
      value: expressRequest[prop],
      description: desc,
    }));
  };
}
