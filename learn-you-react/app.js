import React from 'react';
import ReactDom from 'react-dom';
import TodoBox from './views/index.jsx';

const data = JSON.parse(
  document.getElementById('initial-data')
          .getAttribute('data-json')
);

ReactDom.render(
  <TodoBox data={ data } />,
  document.getElementById('app')
);
