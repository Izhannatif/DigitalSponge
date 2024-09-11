// // // // import React, { useState, useEffect } from 'react';
// // // // import squeezedSponge from '../assets/squeezed.png'; // Add your images for the squeezed sponge
// // // // import normalSponge from '../assets/sponge.png'; // Add your normal sponge image

// // // // const SpongeGame = () => {
// // // //   const [points, setPoints] = useState(0);
// // // //   const [timeLeft, setTimeLeft] = useState(30); // 30-second timer
// // // //   const [isGameActive, setIsGameActive] = useState(false);
// // // //   const [isSqueezed, setIsSqueezed] = useState(false);
// // // //   const [highScore, setHighScore] = useState(
// // // //     localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0
// // // //   );

// // // //   // Timer logic
// // // //   useEffect(() => {
// // // //     let timer;
// // // //     if (isGameActive && timeLeft > 0) {
// // // //       timer = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
// // // //     } else if (timeLeft === 0) {
// // // //       setIsGameActive(false);
// // // //       // Save the score to local storage if it's a new high score
// // // //       if (points > highScore) {
// // // //         setHighScore(points);
// // // //         localStorage.setItem('highScore', points);
// // // //       }
// // // //     }
// // // //     return () => clearInterval(timer); // Clear interval on cleanup
// // // //   }, [isGameActive, timeLeft, points, highScore]);

// // // //   // Start the game
// // // //   const startGame = () => {
// // // //     setPoints(0);  // Reset points
// // // //     setTimeLeft(30); // Reset timer
// // // //     setIsGameActive(true); // Start game
// // // //   };

// // // //   // Handle sponge squeeze
// // // //   const squeezeSponge = () => {
// // // //     if (isGameActive && timeLeft > 0) {
// // // //       setIsSqueezed(true);
// // // //       setPoints((prevPoints) => prevPoints + 1); // Update points
// // // //       setTimeout(() => setIsSqueezed(false), 200); // Sponge animation for 200ms
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="sponge-game flex flex-col items-center w-1/2">
// // // //       <div className="game-info mb-2">
// // // //         <p>Time Left: {timeLeft}s</p>
// // // //         <p>Points: {points}</p>
// // // //         <p>High Score: {highScore}</p>
// // // //       </div>
// // // //       <img
// // // //         src={isSqueezed ? squeezedSponge : normalSponge}
// // // //         alt="Sponge"
// // // //         onClick={squeezeSponge}
// // // //         className={`w-24 h-24 ${isSqueezed ? 'squeezed-animation' : ''}`}
// // // //         style={{ cursor: isGameActive && timeLeft > 0 ? 'pointer' : 'default' }}
// // // //       />
// // // //       {!isGameActive && (
// // // //         <button onClick={startGame} className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded">
// // // //           Start Game
// // // //         </button>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SpongeGame;


import React, { useState, useEffect, useRef } from 'react';
import squeezedSponge from '../assets/squeezed.png'; // Add your images for the squeezed sponge
import normalSponge from '../assets/sponge.png'; // Add your normal sponge image

const SpongeGame = () => {
  const [points, setPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30-second timer
  const [isGameActive, setIsGameActive] = useState(false);
  const [isSqueezed, setIsSqueezed] = useState(false);
  const [highScore, setHighScore] = useState(
    localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0
  );
  const pointsRef = useRef(points); // Reference to keep track of points without causing re-renders

  useEffect(() => {
    pointsRef.current = points; // Sync ref with points whenever points change
  }, [points]);

  // Timer logic
  useEffect(() => {
    let timer;
    if (isGameActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsGameActive(false);
      // Save the score to local storage if it's a new high score
      if (pointsRef.current > highScore) {
        setHighScore(pointsRef.current);
        localStorage.setItem('highScore', pointsRef.current);
      }
    }
    return () => clearInterval(timer); // Clear interval on cleanup
  }, [isGameActive, timeLeft, highScore]);

  // Start the game
  const startGame = () => {
    setPoints(0); // Reset points
    pointsRef.current = 0; // Reset points in ref
    setTimeLeft(30); // Reset timer
    setIsGameActive(true); // Start game
  };

  // Handle sponge squeeze
  const squeezeSponge = () => {
    if (isGameActive && timeLeft > 0) {
      setIsSqueezed(true);
      // Update points in ref without causing re-render
      pointsRef.current += 1;
      setPoints(pointsRef.current); // Sync the state with the updated points
      setTimeout(() => setIsSqueezed(false), 200); // Sponge animation for 200ms
    }
  };

  return (
    <div className=" flex flex-col justify-start items-center w-full">
        <div className='text-6xl font-black mb-10'>Let's Play</div>
      <div className="text-justify">
        <div>Time Left: {timeLeft}s</div>
        <div>Points: {points}</div>
        <div>High Score: {highScore}</div>
      </div>
      <img
        src={isSqueezed ? squeezedSponge : normalSponge}
        alt="Sponge"
        onClick={squeezeSponge}
        className={`w-1/2 h-1/2 ${isSqueezed ? 'squeezed-animation' : ''}`}
        style={{ cursor: isGameActive && timeLeft > 0 ? 'pointer' : 'default' }}
      />
      {!isGameActive && (
        <button onClick={startGame} className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded">
          Start Game
        </button>
      )}
    </div>
  );
};

export default SpongeGame;
