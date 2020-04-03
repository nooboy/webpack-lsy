import '@babel/polyfill';

import React from 'react';
import ReactDOM, { render } from 'react-dom';

import insertElement from '@utils/insert-element.js';
import { printMe } from '@utils/print-me.js';
import { printHer } from '@utils/print-her';
// import jquery from 'jquery';
// import moment from 'moment';

import './index.less';

printMe();
printHer();

// function component () {
//   const frag = document.createDocumentFragment();

//   const div1 = document.createElement('div');
//   div1.className = 'hello-world';
//   div1.innerHTML = 'Hello word';

//   frag.appendChild(div1);
//   return frag;
// }
// document.body.appendChild(component());

insertElement({
  element: 'div',
  className: 'hello-world',
  content: 'hello world',
  nums: 1,
  target: document.body,
});

// 箭头函数语法测试：es6 => es5
const fn = () => {
  console.log('箭头函数');
}
fn();

// class语法测试，es7 => es5
class FC {
  name = 'fc';
  getName() {
    return this.name;
  }
}

const fc = new FC('This is fc name');
console.log('fc: ', fc);

// 装饰器语法测试：decorator => es5
@log
class FC_decorator {
  static sex = '男';
  name = 'fc';
  getName () {
    return this.name;
  }
}
function log (target) {
  // console.log('target: ', target);
  console.log('target sex: ', target.sex);
}

// generator 语法测试
function *gen () {
  yield 10;
  yield 11;
  yield 12;
}
let g = gen();
console.log(g.next());
console.log(g.next());// includes 语法测试：

console.log('includes: ', ['a', 'b', 'c'].includes('c'));

// var a = 3;     // eslint提示
// delete a;

// 打包图片
import husky1 from '@static/img/husky-1.jpg';
const img = new Image();
img.src = husky1;   // dist 目录不会生成该图片文件
document.body.appendChild(img);

const picDiv = document.createElement('div');
picDiv.className = 'test-pic';
document.body.appendChild(picDiv);


// console.log('距离当前时间：', moment().endOf('day').fromNow());
const Comp = () => {
  return <h5>首页渲染的react内容</h5>;
};

ReactDOM.render(<Comp/>, document.getElementById('root'));

