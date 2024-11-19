function Keyboard({ handleAlphabetical, correctWord, guessedWords, wordCount }) {
    const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  
    // Simple function to determine the color of a key
    const getKeyStatus = (key) => {
      let greenCount = 0;  // Track how many times the letter is correctly placed in the word
      let yellowCount = 0; // Track how many times the letter is in the word but wrong position
      let grayCount = 0;   // Track if the letter is not in the word at all
  
      // Check all guesses, not just the current one
      for (let i = 0; i <= wordCount; i++) {
        const currentGuess = guessedWords[i];
        if (!currentGuess) continue; // Skip if no guess yet for this row
  
        // Iterate over each letter in the current guess
        for (let j = 0; j < currentGuess.length; j++) {
          if (currentGuess[j] === key) {
            // If the letter is in the correct position, mark it green
            if (correctWord[j] === key) {
              greenCount++;
            }
            // If the letter is in the word but not in the correct position, mark it yellow
            else if (correctWord.includes(key)) {
              yellowCount++;
            }
            // If the letter is not in the word at all, mark it gray
            else {
              grayCount++;
            }
          }
        }
      }
  
      // Prioritize green > yellow > gray for key color
      if (greenCount > 0) {
        return 'bg-green-500'; // Correct letter, correct position
      }
      if (yellowCount > 0) {
        return 'bg-yellow-500'; // Correct letter, wrong position
      }
      if (grayCount > 0) {
        return 'bg-gray-500'; // Letter is not in the word at all
      }
  
      return 'bg-white'; // Default (no guesses yet)
    };
  
    return (
      <div>
        {qwerty.map((row, rowIndex) => (
          <div key={rowIndex} className="flex space-x-1 justify-center">
            {row.split('').map((key, keyIndex) => {
              const keyStatus = getKeyStatus(key); // Get the key's color status
              return (
                <div
                  key={keyIndex}
                  className={`p-2 border rounded uppercase cursor-pointer ${keyStatus}`}
                  onClick={() => handleAlphabetical(key)}
                >
                  {key}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  }
  
  export default Keyboard;
  