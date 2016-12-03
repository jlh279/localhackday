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