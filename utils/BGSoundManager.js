class BGSoundManager {
  soundMap = {}

  addSound(key, options) {
    this.soundMap[key] = play(key, options)
  }

  play(key) {
    this.soundMap[key].seek = 0
    this.soundMap[key].paused = false
  }

  pause(key) {
    this.soundMap[key].paused = true
    this.soundMap[key].seek = 0
  }

  pauseAllSounds() {
    for (const key in this.soundMap) {
      this.soundMap[key].paused = true
      this.soundMap[key].seek = 0
    }
  }
}

export const bgSoundManager = new BGSoundManager()
