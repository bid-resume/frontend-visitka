const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ filter: 'blur(0)' }}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#050510]" />
      
      {/* Animated blobs with inline blur for better browser support */}
      <div 
        className="blob blob-1 absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-[#4c1d95] opacity-50"
        style={{ filter: 'blur(150px)' }}
      />
      
      <div 
        className="blob blob-2 absolute top-[5%] right-[-20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#1e40af] opacity-45"
        style={{ filter: 'blur(140px)' }}
      />
      
      <div 
        className="blob blob-3 absolute bottom-[-15%] left-[15%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[#7c3aed] opacity-40"
        style={{ filter: 'blur(130px)' }}
      />
      
      <div 
        className="blob blob-4 absolute top-[35%] left-[0%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-[#2563eb] opacity-35"
        style={{ filter: 'blur(120px)' }}
      />
      
      <div 
        className="blob blob-5 absolute bottom-[5%] right-[0%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-[#6366f1] opacity-45"
        style={{ filter: 'blur(135px)' }}
      />

      {/* Small accent blobs */}
      <div 
        className="blob blob-6 absolute top-[55%] right-[25%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-[#06b6d4] opacity-30"
        style={{ filter: 'blur(100px)' }}
      />
      
      <div 
        className="blob blob-7 absolute top-[15%] left-[35%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-[#8b5cf6] opacity-35"
        style={{ filter: 'blur(110px)' }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  )
}

export default AnimatedBackground