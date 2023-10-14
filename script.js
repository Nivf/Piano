 // Create a mapping of note names
  const tonesArray = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]
  const notesDictSharp = {"C": 0, "C#": 1, "D": 2, "D#": 3, "E": 4, "F": 5, "F#": 6, "G": 7, "G#": 8, "A": 9, "A#": 10, "B": 11};
  const notesDictMol = {"C": 0, "Db": 1, "D": 2, "Eb": 3, "E": 4, "F": 5, "Gb": 6, "G": 7, "Ab": 8, "A": 9, "Bb": 10, "B": 11};

function upgradeSongTone(song) {
  // The new tone will be a tone and a half (in terms of semitones) higher
  const semitonesToUpgrade = 3;

  // Call a function to upgrade the tone of each note in the song
  const upgradedSong = song.map(note => upgradeNoteTone(note, semitonesToUpgrade));

  return upgradedSong;
}

function upgradeNoteTone(note, semitones) {

  // Get the index of the note using the mapping
  const toneIndex = notesDictSharp[note] || notesDictMol[note];

  // Calculate the new tone index based on the old tone and the number of semitones
  const upgradedToneIndex = (toneIndex + semitones) % 12;

  // Return the upgraded note
  return tonesArray[upgradedToneIndex];
}

// The song "Leaves Autumn" in a tone and a half higher
const autumnLeaves =
[
  'E', 'F#', 'G', 'C', 'D', 'E', 'F#', 'B', 'Bb', 'B',
  'C', 'D', 'E', 'A', 'A', 'G', 'F#', 'B', 'Eb', 'F#', 'G', 'F#', 'G', 'G',
  'E', 'F#', 'F#', 'G', 'D', 'C#', 'C', 'C', 'D', 'E', 'F#', 'E', 'D', 'C', 'A', 'Bb', 'B', 'B',
  'C', 'B', 'A', 'G#', 'B', 'A', 'A', 'G', 'F#', 'F#', 'G', 'E', 'E'
]

// Call the upgradeSongTone function to upgrade the song by a tone and a half
const upgradedLeavesAutumn = upgradeSongTone(autumnLeaves);

// Print the upgraded song
console.log(upgradedLeavesAutumn);