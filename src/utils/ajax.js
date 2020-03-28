export default  function ajax ({
  url,
  type = 'get',
  async = true,
  data = {}
} = {}) {
  let xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
  // return new Promise(function (resolve, reject) {
    xhr.open(type, url, async);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          // resolve(xhr.responseText);
          console.log('http response: ', xhr.responseText);
        } else {
          // xhr.onerror = reject;
          console.error('http request error...');
        }
      }
    }
    xhr.send();
  // })
}

