//creation of count functions https://deluxeblogtips.com/missing-way-to-create-function-static/
//https://stackoverflow.com/questions/13804213/how-can-i-capture-events-triggered-on-an-extension-icon
count.num = 1;//instantiating count

function count(){
  alert("Count: "+ count.num);
  count.num++;
}


function click_listener(tab) {
  var tablink = tab.url;

  count();
}

//show popup on click
//send email on double click if less than a few 500 milliseconds
chrome.browserAction.onClicked.addListener(click_listener);
