'use strict';

chrome.runtime.onInstalled.addListener(function () {
  console.log(chrome);
  console.log(chrome.storage);
  // chrome.contextMenus.create({
  //   "id": "sampleContextMenu",
  //   "title": "Sample Context Menu",
  //   "contexts": ["selection"]
  // });
  // chrome.storage.sync.set({color: '#3aa757'}, function() {
  //   console.log("The color is green.");
  // });

  chrome.runtime.onSuspend.addListener(function () {
    console.log("Unloading.");
    chrome.browserAction.setBadgeText({ text: "" });
  });

  chrome.runtime.onMessage.addListener(function(req, sender) {
    chrome.storage.local.set({'address': req.address})
    chrome.pageAction.show(sender.tab.id);
    chrome.pageAction.setTitle({tabId: sender.tab.id, title: req.address});
  });

  chrome.browserAction.setBadgeText({text: 'ON'});
  chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
});
