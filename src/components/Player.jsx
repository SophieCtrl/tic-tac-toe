import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonText = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        value={playerName}
        onChange={handleChange}
        required
      ></input>
    );
    buttonText = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="players-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{buttonText}</button>
    </li>
  );
};

export default Player;
