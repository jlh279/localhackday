chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('www.google.com')}, function(tab) {
    // Tab opened.
  });
});
