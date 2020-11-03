const content = '<div id="content"><ul class="article_preview_bottom_profil_share">SHARE<li id="facebook"><a href="http://www.facebook.com" target="_blank"><img id="top1" src="./images/icon-facebook.svg" alt="Facebook"/></a></li><li id="twitter"><a href="http://www.twitter.com" target="_blank"><img src="./images/icon-twitter.svg" alt="twitter"></a></li><li id="pinterest"><a href="http://www.pinterest.com" target="_blank"><img src="./images/icon-pinterest.svg" alt="pinterest"></a></li></ul></div>'

// tippy('#share', {
//   content: content,
//   allowHTML : true,
//   theme : "sharingBox",
//   interactive : true,
//   offset: [0, 25],
//   interactiveBorder : 10,
// });

function tippySettings(x) 
{
	[...document.querySelectorAll('*')].forEach(node => {
		 if (node._tippy) {
		    node._tippy.destroy();
		  }
		});
  if (x.matches) 
  {
    tippy('#share', 
    {
	  content: content,
	  allowHTML : true,
	  theme : "sharingBox",
	  interactive : true,
	  offset: [-108, -52],
	  interactiveBorder : 10,
	  arrow : false,
	});
  } 
  else 
  {
    tippy('#share', 
    {
	  content: content,
	  allowHTML : true,
	  theme : "sharingBox",
	  interactive : true,
	  offset: [0, 25],
	  interactiveBorder : 10,
	  arrow : true,
	});
  }
}

var x = window.matchMedia("(max-width: 480px)")
tippySettings(x) // Call listener function at run time
x.addListener(tippySettings) // Attach listener function on state changes