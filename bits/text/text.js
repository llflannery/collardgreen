Array.prototype.slice.call(document.querySelectorAll(".tweetline")).map(el => {
  el.innerHTML = `<a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location)}&text=${encodeURIComponent(el.dataset.tweet)}">${el.dataset.story}<img class="tweetBird" src="http://www.tampabay.com/projects/assets/sharing/twitter_inline.png"></a>`
});
