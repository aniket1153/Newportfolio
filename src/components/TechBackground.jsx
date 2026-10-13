import DotGrid from "./reactbits/DotGrid";

function TechBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 bg-[#05070c]" style={{ zIndex: 0 }}>
      <DotGrid
        dotSize={3}
        gap={24}
        baseColor="#1c2433"
        activeColor="#22d3ee"
        proximity={150}
        shockRadius={260}
        shockStrength={4}
        glow={0.45}
        swell={0.7}
        stretch={0.5}
        fade={0.5}
        dpr={1.5}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}

export default TechBackground;
