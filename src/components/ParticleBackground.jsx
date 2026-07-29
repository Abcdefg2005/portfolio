import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const options = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 30,
  interactivity: {
    events: { onHover: { enable: false }, resize: { enable: true } }
  },
  particles: {
    color: { value: ['#00d4ff', '#7c3aed', '#00c853', '#ff6d00'] },
    links: { enable: false },
    move: {
      direction: 'none',
      enable: true,
      outModes: { default: 'out' },
      random: false,
      speed: 0.4,
      straight: false
    },
    number: { density: { enable: true, area: 1200 }, value: 15 },
    opacity: { value: { min: 0.2, max: 0.5 } },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 3 } }
  },
  detectRetina: false
};

export default function ParticleBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
    />
  );
}
