exports.handler = function (event, ctx, cb) {
  cb(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Hello",
    }),
  });
};
