const frame = document.getElementById('toolFrame');
const reloadButton = document.getElementById('reloadTool');

reloadButton.addEventListener('click', () => {
  // 入力途中の内容がある場合に備え、確認してから再読み込みします。
  if (confirm('ログ作成ツールを再読み込みします。入力中の内容が消える可能性があります。よろしいですか？')) {
    frame.contentWindow.location.reload();
  }
});
