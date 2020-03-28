import insertElement from '@utils/insert-element.js';
import ajax from '@utils/ajax';

import { printMe } from '@utils/print-me.js';
import { printHer } from '@utils/print-her';
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

