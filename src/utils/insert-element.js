export default function insertElement({
  element = null,
  className = '',
  content = '',
  nums = 1,
  target = document.body,
  event = null,
  eventHandler = null,
} = {}) {
  const frag = document.createDocumentFragment();
  for (let i=0; i<nums; i++) {
    const ele = document.createElement(element);
    ele.className = className;
    ele.innerHTML =  content;
    if (event) {
      Event.addEvent(ele, event, eventHandler);
    }
    frag.appendChild(ele);
  }
  target.appendChild(frag);
}

export const Event = {
  addEvent (ele, type, handler) {
    if (ele.addEventListener) {
      ele.addEventListener(type, handler, false);
    } else if (ele.attachEvent) {
      ele.attachEvent('on' + type, function () {
        handler.call(ele);
      });
    } else {
      ele['on' + type] = handler;
    }
  },
  removeEvent (ele, type, handler) {
    if (ele.addEventListener) {
      ele.removeEventListener(type, handler, false);
    } else if (ele.attachEvent) {
      ele.detachEvent('on' + type, handler);
    } else {
      ele['on' + type] = null;
    }
  },
  stopEvent (e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (e.cancelBubble) {
      e.cancelBubble = true;
    }
  },
  stopDefault (e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  }
};
