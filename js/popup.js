window.addEventListener("load", function()
{
	document.getElementById("startGame")
        .addEventListener("click", startGame, false);
}, false);

function startGame() {
	// Get start url
	var startPage = document.getElementById("start-page").value;
	if (startPage.length == 0)
		var url = "https://en.wikipedia.org/wiki/Special:Random";
	else
		var url = "https://en.wikipedia.org/wiki/" + startPage;

	// Create new tab
	chrome.tabs.create({"url": url}, function(tab) {
		tabId = tab.id;
	});
	chrome.tabs.update(tabId, {url: url});
}

function saveChanges() {

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
    });

    chrome.storage.sync.get(['urls'], function(items) {
        var urls = items[0]
        urls.append(url);
    });
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({'urls': urls], function() {
      // Notify that we saved.
      message('Settings saved');
    });
    }
}

// chrome.storage.onChanged.addListener(function(changes, namespace) {
//     if (changes[urls])
//         console.log(urls.length())
// });
