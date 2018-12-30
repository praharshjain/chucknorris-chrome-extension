// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {

    chrome.tabs.create({
        url: chrome.extension.getURL('joke.html'),
        active: false
    }, function (tab) {
        // After the tab has been created, open a window to inject the tab
        chrome.windows.create({
            tabId: tab.id,
            type: 'popup',
            focused: true,
            width: 500,
            height: 150,
            left: window.screen.availWidth
        });
    });
});