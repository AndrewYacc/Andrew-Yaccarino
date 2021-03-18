function setup() {
  loadJSON('./trails.json',parseTrails);
}

function getZoneAlert(zone) {
  loadJSON('https://api.weather.gov/alerts/active/zone/WIZ'+zone,gotData);
}

function gotData(data) {
    data.feature.headline

    /**
     *  <dialog>
     *    <h1 centered red bold> [headline] </h1>
     *    <p centered> [description] </p>
     *  </dialog>
     */
}

function addTrail(data, parent) {
  /**
   *  <a href="[source]">
   *    <div>
   *      <h1 centered> [name] </h1>
   *      <img href="[img]"/>
   *      <zones hidden>
   *        <zone> [zone] </zone>
   *      </zones>
   *    </div>
   *  </a>
   */
  let link = NEWELEMENT('a', parent);
  link.setAttribute('href',data.link);
  let div = NEWELEMENT('div', link);
  let h1 = NEWELEMENT('h1', div);
  h1.innerHTML = data.name;
  let img = NEWELEMENT('img', div);
  img.setAttribute('src',data.image);
  let zones = NEWELEMENT('zones', div);
  zones.setAttribute("hidden",null);
  for (let zoneData in data.zones) {
    let zone = NEWELEMENT('zone', zones);
    zone.innerHTML = zoneData;
  }
}

function NEWELEMENT(tag, parent) {
  parent = parent || document.body;
  let element = document.createElement(tag);
  parent.appendChild(element);
  return element;
}

function parseTrails(data) {
  for (let trail in data) {
    addTrail(trail, document.body);
  }
}

window.onerror = function() {

};
/*
function loadFile(path, callback_func) {
  //fetchJsonp()
  callback_func(require(path));  
  /*if (typeof window.XMLHttpRequest !== 'function') {
    alert("The xmlhttprequest API isn't supported on this browser yet.");
    return;
  }
  var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback_func(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);*/
/*}

function loadJSON(path, callback_func, err_callback) {
  if (typeof window.Request !== 'function') {
    alert("The request API isn't supported on this browser yet.");
    return;
  }
  if (typeof window.fetch !== 'function') {
    alert("The fetch API isn't supported on this browser yet.");
    return;
  }

  let request = new Request(path, {method: 'GET', mode: 'cors', headers: new Headers()});
  promise = fetch(request);
  promise = promise.then(res => {
    if (!res.ok) {
      const err = new Error(res.body);
      err.status = res.status;
      err.ok = false;
      throw err;
    } else {
      return res.json();
    }
  });
  promise.then(callback_func || (() => {}));
  promise.catch(err_callback || console.error);
  return promise;
}*/