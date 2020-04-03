import React from 'react';
import ReactDOM, { render } from 'react-dom';

import insertElement from '@utils/insert-element.js';
import ajax from '@utils/ajax';
import { printMe } from '@utils/print-me.js';
import { printHer } from '@utils/print-her';
// import jquery from 'jquery';
// import moment from 'moment';

printMe();
printHer();

insertElement({
  element: 'div',
  className: 'div1',
  content: '列表页',
});

// consolee.log('这是错误代码');   // inline-source-map测试

ajax({
  url: '/api/list'
});

// 环境变量
// console.log('---PRODUCTION: ', PRODUCTION ? 'pro' : 'dev');   // pro
// console.log('typeof PRODUCTION: ', typeof PRODUCTION);
// console.log(typeof VERSIONS);
// console.log(typeof BROWSER_SUPPORTS_HTML5);
// console.log(typeof TWO);

// console.log('距离当前时间：', moment().endOf('day').fromNow());
const Comp = () => {
  console.error('这是react代码');
  return <h5>react</h5>;
};

ReactDOM.render(<Comp/>, document.getElementById('root'));

