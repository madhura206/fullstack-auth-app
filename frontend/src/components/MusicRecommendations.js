import React, { useState } from "react";
import "./MusicRecommendations.css";

const MusicRecommendations = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const moods = ["Happy", "Sad", "Energetic", "Calm", "Romantic", "Focus"];

  const musicData = {
    Happy: ["Happy – Pharrell Williams", "Best Day of My Life – American Authors", "Good Life – OneRepublic"],
    Sad: ["Someone Like You – Adele", "Fix You – Coldplay", "Let Her Go – Passenger"],
    Energetic: ["Thunderstruck – AC/DC", "Can’t Hold Us – Macklemore", "Stronger – Kanye West"],
    Calm: ["Weightless – Marconi Union", "River Flows in You – Yiruma", "Bloom – ODESZA"],
    Romantic: ["Perfect – Ed Sheeran", "All of Me – John Legend", "Just the Way You Are – Bruno Mars"],
    Focus: ["Lo-Fi Beats – Chillhop", "Focus Flow – Spotify", "Coding Mode – Chillstep"]
  };

  const handleSelectMood = (mood) => {
    setSelectedMood(mood);
    setRecommendations(musicData[mood] || []);
  };

  return (
    <div className="music-container">
      <h2>🎶 Discover Music by Mood</h2>
      <p>Select your mood to get personalized recommendations:</p>

      <div className="mood-buttons">
        {moods.map((mood) => (
          <button
            key={mood}
            className={`mood-btn ${selectedMood === mood ? "active" : ""}`}
            onClick={() => handleSelectMood(mood)}
          >
            {mood}
          </button>
        ))}
      </div>

      {selectedMood && (
        <div className="recommendations">
          <h3>{selectedMood} Playlist</h3>
          <ul>
            {recommendations.map((song, index) => (
              <li key={index}>{song}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MusicRecommendations;
