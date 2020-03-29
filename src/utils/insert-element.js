export default function insertElement({
  element = null,
  className = '',
  content = '',
  nums = 1,
  target = document.body,
} = {}) {
  const frag = document.createDocumentFragment();
  for (let i=0; i<nums; i++) {
    const ele = document.createElement(element);
    ele.className = className;
    ele.innerText =  content;
    frag.appendChild(ele);
  }
  target.appendChild(frag);
}
