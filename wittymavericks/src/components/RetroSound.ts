'use client';

interface CustomWindow extends Window {
  webkitAudioContext?: typeof AudioContext;
}

class RetroSoundEngine {
  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    const AudioContextClass = window.AudioContext || (window as unknown as CustomWindow).webkitAudioContext;
    return AudioContextClass ? new AudioContextClass() : null;
  }

  // Synthesize a wood block / gavel strike sound
  public playGavel() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const time = ctx.currentTime;
    
    // Bass resonance
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(140, time);
    osc1.frequency.exponentialRampToValueAtTime(35, time + 0.2);
    gain1.gain.setValueAtTime(0.6, time);
    gain1.gain.exponentialRampToValueAtTime(0.001, time + 0.25);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    
    // High wood strike click
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(800, time);
    osc2.frequency.exponentialRampToValueAtTime(250, time + 0.04);
    gain2.gain.setValueAtTime(0.4, time);
    gain2.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + 0.3);
    osc2.stop(time + 0.1);
  }

  // Synthesize a retro typewriter click
  public playTypewriter() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const time = ctx.currentTime;
    const bufferSize = ctx.sampleRate * 0.02; // 20ms duration
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Populate with white noise
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Apply highpass filter to give it a sharp typewriter tick sound
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1500, time);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.08, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.015);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(time);
    noise.stop(time + 0.02);
  }

  // Synthesize television static noise channel switcher click
  public playTVStaticClick() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const time = ctx.currentTime;
    
    // Mechanical dial click (low thud)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(100, time);
    osc.frequency.exponentialRampToValueAtTime(10, time + 0.06);
    gain.gain.setValueAtTime(0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.07);
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    // Static static hiss
    const bufferSize = ctx.sampleRate * 0.12; // 120ms duration
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.15, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
    
    noise.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    osc.start(time);
    noise.start(time);
    osc.stop(time + 0.15);
    noise.stop(time + 0.15);
  }

  // Synthesize telephone bell ring sound
  public playPhoneBell() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const time = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    // Double frequency ring (dual frequency like old telephone bell)
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(853, time); // Red Telephone Standard frequency
    
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(960, time);

    gain.gain.setValueAtTime(0.0, time);
    // Mimic the rapid vibration of the telephone clapper
    for (let i = 0; i < 6; i++) {
      const strikeTime = time + i * 0.12;
      gain.gain.setValueAtTime(0.15, strikeTime);
      gain.gain.exponentialRampToValueAtTime(0.01, strikeTime + 0.09);
    }

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + 0.85);
    osc2.stop(time + 0.85);
  }
}

export const retroSound = new RetroSoundEngine();
