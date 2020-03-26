import './index.less';

function component () {
  const frag = document.createDocumentFragment();

  const div1 = document.createElement('div');
  div1.className = 'hello-world';
  div1.innerHTML = 'Hello word haha';
  frag.appendChild(div1);
  return frag;
}

document.body.appendChild(component());

