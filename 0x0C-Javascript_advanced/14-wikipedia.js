function createElement(data){
  const p = document.createElement('p');
  p.innerHTML = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback){
  const req = new XMLHttpRequest();
  req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origi");
  req.send();
  if (req.status === 200){
    callback();
  }
}

queryWikipedia(createElement('succesful'));
