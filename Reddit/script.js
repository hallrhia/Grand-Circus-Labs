function apiCall() {
  let url = "https://www.reddit.com/r/aww/.json";
  fetch(url)
    .then((response) => response.json())
    .then((redditData) => {
      for (let i = 0; i < redditData.data.children.length; i++) {
        const post = redditData.data.children[i].data;

        let redditPost = document.getElementById("redditPost");
        let newPost = document.createElement("div");

        const title = document.createElement("h1");
        const img = document.createElement("img");
        const url = document.createElement("a");

        title.innerText = post.title;
        img.src = post.thumbnail;
        url.href = post.url;
        url.innerText = "Click here to read on!";

        newPost.appendChild(title);
        newPost.appendChild(img);
        newPost.appendChild(url);
        redditPost.append(newPost);
      }
    });
}

apiCall();
