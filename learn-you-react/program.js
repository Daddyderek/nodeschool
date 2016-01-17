// const app = require('express')();

// app.set('port', (process.argv[2] || 3000));
// app.set('view engine', 'jsx');
// app.set('views', __dirname + '/views');
// app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

// require('babel/register')({
//   ignore: false
// });

// const data = [
//   { title: 'Shopping', detail: process.argv[3] },
//   { title: 'Hair cut', detail: process.argv[4] }
// ];

// app.use('/', function(req, res) {
//   res.render('index', { data: data });
// });

// app.listen(app.get('port'), ()=>{});

const React          = require('react');
const ReactDOMServer = require('react-dom/server');
const DOM            = React.DOM;
const body           = DOM.body;
const div            = DOM.div;
const script         = DOM.script;

const browserify = require('browserify');
const babelify   = require("babelify");

const app = require('express')();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({transformViews: false}));

require('babel/register')({
  ignore: false
});

const TodoBox = require('./views/index.jsx');

const data = [
  {title: 'Shopping', detail: process.argv[3] || 'cookies' },
  {title: 'Hair cut', detail: process.argv[4] || '13:00' }
];

app.use('/bundle.js', (req, res) => {
  res.setHeader('content-type', 'application/javascript');

  browserify({debug: true})
  .transform(babelify.configure({
    presets: ["react", "es2015"]
  }))
  .require("./app.js", {entry: true})
  .bundle()
  .pipe(res);
});

app.use('/', (req, res) => {
  const initialData = JSON.stringify(data);
  const markup      = ReactDOMServer
                      .renderToString(
                        React.createElement(TodoBox, {data: data})
                      );

  res.setHeader('Content-Type', 'text/html');

  const html = ReactDOMServer
               .renderToStaticMarkup(body(null,
                  div({
                    id: 'app',
                    dangerouslySetInnerHTML: {__html: markup}
                  }),
                  script({
                    id: 'initial-data',
                    type: 'text/plain',
                    'data-json': initialData
                  }),
                  script({src: '/bundle.js'})
  ));

  res.end(html);
});

app.listen(app.get('port'), ()=>{});
