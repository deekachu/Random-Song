const today = new Date().toISOString().slice(0, 10);

firebase.database().ref("songs").once("value", snapshot => {
  const songs = snapshot.val();

  let todaySong = null;

  for (const id in songs) {
    if (songs[id].date === today) {
      todaySong = songs[id];
      break;
    }
  }

  if (!todaySong) {
    document.body.innerHTML = "<h2>No song scheduled today</h2>";
    return;
  }

  document.getElementById("title").textContent = todaySong.title;
  document.getElementById("video").src =
    `https://www.youtube.com/embed/${todaySong.youtubeId}`;
});
