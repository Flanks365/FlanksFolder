function ajaxGET(url, callback) {

    const xhr = new XMLHttpRequest();
  
    let value = null;
  
    xhr.onload = function () {
        value = this.responseText;
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            //console.log('responseText:' + xhr.responseText);
  
            // callback function
            value = this.responseText;
            callback(this.responseText);
  
        } else {
            console.log(this.status);
        }
    }
    xhr.open("GET", url);
    xhr.send();
    // who's there?
  
  }
