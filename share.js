const content = '<div id="content"><ul id="share" class="article_preview_bottom_profil_share">SHARE<li id="facebook"><a href="http://www.facebook.com" target="_blank"><img src="./images/icon-facebook.svg" alt="Facebook"></a></li><li id="twitter"><a href="http://www.twitter.com" target="_blank"><img src="./images/icon-twitter.svg" alt="twitter"></a></li><li id="pinterest"><a href="http://www.pinterest.com" target="_blank"><img src="./images/icon-pinterest.svg" alt="pinterest"></a></li></ul></div>'

tippy('#share', {
  content: content,
  allowHTML : true,
  theme : "sharingBox",
  interactive : true,
  offset: [0, 25],
});

