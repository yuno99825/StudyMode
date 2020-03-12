const filter = {
  urls: [
    '*://youtube.com/*',
    '*://www.youtube.com/*',
    '*://facebook.com/*',
    '*://www.facebook.com/*',
  ],
};

const opt = ['blocking'];

window.chrome.webRequest.onBeforeRequest.addListener(
  page => {
    console.log('page blocked - ' + page.url);

    return {
      cancel: true,
    };
  },
  filter,
  opt
);