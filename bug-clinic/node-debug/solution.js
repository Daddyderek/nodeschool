const request = require("http").request;

const headers = {
  host: "localhost",
  port: 9876,
  method: "GET"
};

const yolo = request(headers, res => {
  res.setEncoding('utf8');
  res.on('data', data => {
    console.log('BODY: ' + data);
  });

  res.on('end', () => {
    console.error('done!');
  });
});

yolo.end();
