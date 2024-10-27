// src/assets/songs/song.ts
const audio1 = require('./1.mp3').default; // Use .default for CommonJS compatibility
const audio2 = require('./2.mp3').default;
const audio3 = require('./3.mp3').default;

export const audioFiles = {
  '1.mp3': audio1,
  '2.mp3': audio2,
  '3.mp3': audio3,
};
