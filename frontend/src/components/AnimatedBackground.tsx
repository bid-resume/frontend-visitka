const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0a0a1f] to-[#050510]" />
      
      {/* Animated blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px]">
        <div className="blob blob-1 w-full h-full rounded-full bg-[#4c1d95] opacity-40 blur-[120px]" />
      </div>
      
      <div className="absolute top-[10%] right-[-15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px]">
        <div className="blob blob-2 w-full h-full rounded-full bg-[#1e40af] opacity-35 blur-[100px]" />
      </div>
      
      <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px]">
        <div className="blob blob-3 w-full h-full rounded-full bg-[#7c3aed] opacity-30 blur-[110px]" />
      </div>
      
      <div className="absolute top-[40%] left-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px]">
        <div className="blob blob-4 w-full h-full rounded-full bg-[#2563eb] opacity-25 blur-[90px]" />
      </div>
      
      <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px]">
        <div className="blob blob-5 w-full h-full rounded-full bg-[#6366f1] opacity-35 blur-[100px]" />
      </div>

      {/* Small accent blobs */}
      <div className="absolute top-[60%] right-[30%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px]">
        <div className="blob blob-6 w-full h-full rounded-full bg-[#06b6d4] opacity-20 blur-[80px]" />
      </div>
      
      <div className="absolute top-[20%] left-[40%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px]">
        <div className="blob blob-7 w-full h-full rounded-full bg-[#8b5cf6] opacity-25 blur-[70px]" />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  )
}

export default AnimatedBackground