const url = 'https://vxrp.themyth.repl.co/bot/stats'
// let stats = document.getElementById('stats');

// fetch(url)
//     .then(res => res.json())
//     .then(json => console.log(json));

// document.getElementById("stats").innerText = `${json.server_count}`

const Http = new XMLHttpRequest();

Http.open("GET", url);
// Http.withCredentials = ;
Http.setRequestHeader("Content-Type", "application/json");
Http.setRequestHeader("Access-Control-Allow-Origin", "https://vxrp.themyth.repl.co");
Http.send();

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
}

// var http_request;
// http_request = new XMLHTTPRequest();
// http_request.onreadystatechange = function () { /* .. */ };
// http_request.open("POST", "https://sso.moxio.com");

// http_request.send({ 'request': "authentication token" });
