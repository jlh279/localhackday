// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://www.google.com";
    chrome.tabs.create({ url: newURL });
});
