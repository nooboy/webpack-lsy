import '@babel/polyfill';
import './index.less';

function component () {
  const frag = document.createDocumentFragment();

  const div1 = document.createElement('div');
  div1.className = 'hello-world';
  div1.innerHTML = 'Hello word';

  frag.appendChild(div1);
  return frag;
}

document.body.appendChild(component());

// 箭头函数语法测试：es6 => es5
const fn = () => {
  console.log('箭头函数');
}
fn();

// class语法测试，es7 => es5
class FC {
  name = 'fc';
  getName () {
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
