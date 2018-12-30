function ajaxGet(url, successCallBack, errorCallback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                successCallBack(xmlhttp.responseText);
            } else if (errorCallback) {
                errorCallback(xmlhttp);
            }
        }
    };
    xmlhttp.open('GET', url);
    xmlhttp.send(null);
}

function showJoke(joke = 'Raise your standards to get a Chuck Norris fact!') {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('joke').innerText = joke;
}

ajaxGet('https://api.icndb.com/jokes/random?limitTo=[nerdy]',
    function (res) {
        try {
            res = JSON.parse(res);
            if (res.type == 'success' && res.value && res.value.joke) {
                showJoke(res.value.joke);
            } else {
                showJoke();
            }
        } catch (err) {
            showJoke();
        }
    },
    function (err) {
        showJoke();
    });