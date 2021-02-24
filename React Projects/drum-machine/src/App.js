import React, { useState, useEffect } from "react";

const DrumPad = ({ drumKey, song, handleClick, url }) => {
  return (
    <button id={song} onClick={handleClick(drumKey, song)}>
      {drumKey}
      <audio src={url} id={drumKey} />
    </button>
  );
};

function App() {
  const [title, setTitle] = useState("TEST");
  const [drumPads, setDrumPad] = useState([
    {
      key: "Q",
      song: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      key: "W",
      song: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      key: "E",
      song: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      key: "A",
      song: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      key: "S",
      song: "Heater-6",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      key: "D",
      song: "Dsc_Oh",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      key: "Z",
      song: "Kick_n_Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      key: "X",
      song: "RP4_KICK_1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      key: "C",
      song: "Cev_H2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ]);

  function changeLibrary2() {
    setDrumPad([
      {
        key: "Q",
        song: "coin",
        url:
          "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_game_sound_wooden_bright_mallet_style_positive_tone_005_62387.mp3?_=1",
      },
      {
        key: "W",
        song: "game-notification",
        url:
          "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_game_sound_plinky_plucked_notification_001_62300.mp3?_=1",
      },
      {
        key: "E",
        song: "Water shuging",
        url:
          "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-55112/zapsplat_multimedia_game_sound_water_drip_x4_61522.mp3?_=7",
      },
      {
        key: "A",
        song: "Leafs",
        url:
          "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_foley_tree_leaves_branch_whoosh_impact_designed_016_47847.mp3?_=2",
      },
      {
        key: "S",
        song: "rocks hit",
        url:
          "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-10157/zapsplat_impact_rock_small_hit_solid_ground_001_11178.mp3?_=1",
      },
      {
        key: "D",
        song: "Enter",
        url:
          "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-55112/zapsplat_technology_computer_keyboard_apple_mac_magic_single_key_press_002_61112.mp3?_=10",
      },
      {
        key: "Z",
        song: "Woosh into hit",
        url:
          "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_sound_design_hit_whoosh_into_punchy_crunch_hit_with_a_long_tail_002_62779.mp3?_=8",
      },
      {
        key: "X",
        song: "Wet-squeeze",
        url:
          "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_cartoon_squelch_002_48600.mp3?_=1",
      },
      {
        key: "C",
        song: "Elevator Bell",
        url:
          "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-14566/zapsplat_bells_small_bell_service_or_elevator_18043.mp3?_=4",
      },
    ]);
  }

  function changeLibrary1() {
    setDrumPad([
      {
        key: "Q",
        song: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      },
      {
        key: "W",
        song: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      },
      {
        key: "E",
        song: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      },
      {
        key: "A",
        song: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      },
      {
        key: "S",
        song: "Heater-6",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      },
      {
        key: "D",
        song: "Dsc_Oh",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      },
      {
        key: "Z",
        song: "Kick_n_Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      },
      {
        key: "X",
        song: "RP4_KICK_1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      },
      {
        key: "C",
        song: "Cev_H2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      },
    ]);
  }

  window.addEventListener("keypress", handleKeyPress);

  function handleAudio(drumKey, song) {
    return () => {
      setName(song);
      document.getElementById(drumKey).play();
    };
  }

  function setName(song) {
    setTitle(song);
  }

  function handleKeyPress(event) {
    if (drumPads.find((each) => each.key === event.key.toUpperCase())) {
      for (let i = 0; i < drumPads.length; i++) {
        if (event.key.toUpperCase() === drumPads[i].key) {
          setTitle(drumPads[i].song);
        }
      }
      return document.getElementById(event.key.toUpperCase()).play();
    }
  }

  return (
    <div className="Wrapper">
      <div class="Drum-Buttons">
        {drumPads.map((item) => (
          <DrumPad
            song={item.song}
            drumKey={item.key}
            url={item.url}
            handleClick={handleAudio}
          />
        ))}
      </div>
      <div class="option-buttons">
        {/* <button onClick={changeLibrary1}>Library1</button> */}
        <button onClick={changeLibrary1}>Library1</button>
        <button onClick={changeLibrary2}>Library2</button>
      </div>
      <div>{title}</div>
      <div>Additional sound effects from https://www.zapsplat.com</div>
    </div>
  );
}

export default App;
