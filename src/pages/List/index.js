import insertElement from '../../utils/insert-element.js';
import ajax from '../../utils/ajax';

insertElement({
  element: 'div',
  className: 'div1',
  content: '列表页',
});

// consolee.log('这是错误代码');   // inline-source-map测试

ajax({
  url: '/api/list'
});