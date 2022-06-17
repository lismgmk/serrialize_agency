import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Manrope:500,600,700'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
