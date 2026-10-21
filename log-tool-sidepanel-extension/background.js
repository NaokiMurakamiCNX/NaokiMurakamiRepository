// Chrome Extension MV3 service worker
// クリック時にサイドパネルを開く設定を有効化します。
chrome.runtime.onInstalled.addListener(() => {
  if (chrome.sidePanel && chrome.sidePanel.setPanelBehavior) {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((error) => {
      console.error('Failed to set side panel behavior:', error);
    });
  }
});

// 念のため、拡張機能アイコン押下時にもサイドパネルを開きます。
chrome.action.onClicked.addListener(async (tab) => {
  try {
    if (chrome.sidePanel && chrome.sidePanel.open && tab && tab.windowId) {
      await chrome.sidePanel.open({ windowId: tab.windowId });
    }
  } catch (error) {
    console.error('Failed to open side panel:', error);
  }
});
