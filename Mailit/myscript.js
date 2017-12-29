var alreadyClicked = false;
var timer;

//email variables
var email = "some_email@email.com";
var subject = "Mail it!"
var body = "url";

//Add Default Listener provided by chrome.api.*
chrome.browserAction.onClicked.addListener(function (tab) {
    var url = tab.url;
    console.log("Double click");//send mail of current page

    //Check for previous click
    if (alreadyClicked) {
        //Yes, Previous Click Detected

        //Clear timer already set in earlier Click
        clearTimeout(timer);

        //open up email client
        myWindow = window.open("mailto:"+email+"?"+"subject="+subject+"&"+"body="+url+"\n");
        setTimeout(function() { myWindow.close() }, 100);//closes extra tab that opens when clicked

        alreadyClicked = false;

        return;
    }

    //Set Click to  true
    alreadyClicked = true;

    //Add a timer to detect next click to a sample of 250
    timer = setTimeout(function () {
        //No more clicks so, this is a single click
    console.log("Single click");

        //open html doc
        window.open ("popup.html","Mail It!");
        //Change Icon
        chrome.browserAction.setIcon({
            "path": "icon.png"
        }, function () {
            console.log("Changed Icon for Single Click");
        });

        //Clear all timers
        clearTimeout(timer);

        //Ignore clicks
        alreadyClicked = false;
    }, 250);
});
