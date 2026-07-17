import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { IconArrow } from './Icons';
import profileImg from '../assets/sairaj-borkar-profile.webp';

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const heroEl = heroRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!THREE || !canvas || !heroEl) return;

    let width = heroEl.clientWidth;
    let height = heroEl.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    const group = new THREE.Group();
    scene.add(group);

    // Core wireframe icosahedron — the "eye" of the scene
    const coreGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x5be3d3, wireframe: true, transparent: true, opacity: 0.55 });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    const coreInnerGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const coreInnerMat = new THREE.MeshBasicMaterial({ color: 0xf2a65a, wireframe: true, transparent: true, opacity: 0.3 });
    const coreInner = new THREE.Mesh(coreInnerGeo, coreInnerMat);
    group.add(coreInner);

    // Scan rings — pulsing toruses suggesting a detection sweep
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const ringGeo = new THREE.TorusGeometry(2.6 + i * 0.55, 0.008, 8, 96);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x5be3d3, transparent: true, opacity: 0.25 - i * 0.05 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2 + i * 0.15;
      group.add(ring);
      rings.push(ring);
    }

    // Point cloud field
    const starCount = 260;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 5 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0x8fa3a8, size: 0.035, transparent: true, opacity: 0.6 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    group.position.x = 1.6;
    stars.position.x = 1.6;

    let mouseX = 0, mouseY = 0, targetRotX = 0, targetRotY = 0;
    
    const handlePointerMove = (e: PointerEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const handleResize = () => {
      width = heroEl.clientWidth; 
      height = heroEl.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!reduceMotion) {
        group.rotation.y = t * 0.16;
        group.rotation.x = Math.sin(t * 0.12) * 0.15;
        coreInner.rotation.y = -t * 0.3;
        rings.forEach((r, i) => {
          r.rotation.z = t * (0.08 + i * 0.03);
          const s = 1 + Math.sin(t * 1.2 + i) * 0.03;
          r.scale.set(s, s, s);
        });
        stars.rotation.y = t * 0.02;

        targetRotX += (mouseY * 0.25 - targetRotX) * 0.03;
        targetRotY += (mouseX * 0.25 - targetRotY) * 0.03;
        camera.position.x = 1.6 + targetRotY * 0.6;
        camera.position.y = -targetRotX * 0.6;
        camera.lookAt(1.6, 0, 0);
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      coreInnerGeo.dispose();
      coreInnerMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      rings.forEach(r => {
        r.geometry.dispose();
        (r.material as THREE.Material).dispose();
      });
    };
  }, []);

  return (
    <header className="hero" id="top" ref={heroRef}>
      <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true"></canvas>
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="hero-scanline" aria-hidden="true"></div>

      <span className="tag-float" style={{ top: '22%', left: '3%', animationDelay: '0s' }}>REACT.JS · 98%</span>
      <span className="tag-float" style={{ top: '68%', left: '5%', animationDelay: '1.2s' }}>COMPUTER VISION</span>
      <span className="tag-float" style={{ top: '30%', right: '4%', animationDelay: '.6s' }}>NODE.JS</span>
      <span className="tag-float" style={{ top: '72%', right: '6%', animationDelay: '1.8s' }}>PYTHON · ML</span>

      <div className="container">
        <div className="hero-inner">
          <div className="hero-eyebrow" data-reveal><span className="bracket">[</span> FULL-STACK &amp; AI/CV DEVELOPER <span className="bracket">]</span></div>
          
          <div className="hero-profile" data-reveal>
            <img src={profileImg} alt="Sairaj Borkar" className="hero-avatar" />
            <div className="hero-name">Sairaj Borkar</div>
          </div>

          <h1 data-reveal>Building systems that <em>perceive</em>, decide, and respond in real time.</h1>
          <p className="hero-sub" data-reveal>
            I'm Sairaj Borkar — I design and ship full-stack products where computer vision, sensors,
            and real-time signal processing meet everyday problems, from assistive tech to developer wellness.
          </p>
          <div className="hero-actions" data-reveal>
            <a className="btn btn-primary" href="#projects">View projects <IconArrow /></a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
            <a className="btn btn-ghost" href="./Sairaj_Borkar_Resume.pdf" target="_blank" rel="noreferrer">Resume <IconArrow /></a>
          </div>
          <div className="hero-meta" data-reveal>
            <div><div className="v">3</div><div className="k">Shipped Projects</div></div>
            <div><div className="v">Top 5</div><div className="k">Bengaluru AI Hackathon</div></div>
            <div><div className="v">90+</div><div className="k">Marketplace Users</div></div>
            <div><div className="v">1st</div><div className="k">Place, Project Expo</div></div>
          </div>
        </div>
      </div>
    </header>
  );
};
