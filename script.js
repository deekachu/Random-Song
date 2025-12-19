const firebaseConfig = {
  apiKey: "AIzaSyApFdQs1CMFL1cHf9RrREfH3lOIbMCMBBs",
  authDomain: "daves-daily-song.firebaseapp.com",
  databaseURL: "https://daves-daily-song-default-rtdb.firebaseio.com",
  projectId: "daves-daily-song",
  storageBucket: "daves-daily-song.firebasestorage.app",
  messagingSenderId: "329353973100",
  appId: "1:329353973100:web:eac9fa3393c9f5b52c7749"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const videoData = getTodayVideo();

document.getElementById("title").textContent = videoData.title;
document.getElementById("video").src =
  `https://www.youtube.com/embed/${videoData.youtubeId}`;

const starsDiv = document.getElementById("stars");

for (let i = 1; i <= 5; i++) {
  const btn = document.createElement("button");
  btn.textContent = "⭐".repeat(i);
  btn.onclick = () => rateVideo(i);
  starsDiv.appendChild(btn);
}

function rateVideo(score) {
  const id = videoData.youtubeId;
  const ref = db.ref(`ratings/${id}`);

  ref.push({
    score: score,
    timestamp: Date.now()
  });

  alert("Thanks for voting!");
}

