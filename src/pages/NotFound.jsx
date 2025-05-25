import { useState, useEffect } from 'react';

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center overflow-hidden relative">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className={`w-full h-full max-w-6xl mx-auto text-center relative transition-all duration-1000 flex flex-col items-center justify-center px-4 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* 3D Holographic Book */}
        <div className="relative mb-8 mx-auto perspective-1000 px-16 sm:px-20">
          <div 
            className="relative mx-auto w-48 h-56 sm:w-60 sm:h-72 transform-gpu transition-transform duration-300"
            style={{
              transform: `rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg) translateZ(0)`
            }}
          >
            {/* Main Book Body */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-xl sm:rounded-2xl shadow-2xl transform rotate-6 skew-y-2 origin-bottom-right backdrop-blur-sm border border-green-400/20">
              {/* Book Cover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent rounded-xl sm:rounded-2xl animate-pulse"></div>
              
              {/* Book Spine */}
              <div className="absolute right-0 top-0 h-full w-2 sm:w-3 bg-gradient-to-b from-green-400 to-green-600 rounded-r-xl sm:rounded-r-2xl shadow-lg"></div>
              
              {/* Holographic Elements */}
              <div className="absolute left-3 sm:left-6 top-3 sm:top-6 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-400 to-green-500 shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="absolute inset-1 sm:inset-2 rounded-full bg-white/80"></div>
              </div>
              
              {/* Circuit Pattern */}
              <div className="absolute inset-3 sm:inset-4 opacity-20">
                <div className="w-full h-0.5 bg-green-400 mb-2 sm:mb-4"></div>
                <div className="w-3/4 h-0.5 bg-green-400 mb-2 sm:mb-4"></div>
                <div className="w-1/2 h-0.5 bg-green-400 mb-2 sm:mb-4"></div>
              </div>
            </div>
            
            {/* 3D Depth Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl sm:rounded-2xl shadow-xl transform rotate-6 skew-y-2 origin-bottom-right -z-10 translate-x-1 translate-y-1"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl sm:rounded-2xl shadow-lg transform rotate-6 skew-y-2 origin-bottom-right -z-20 translate-x-2 translate-y-2"></div>
            
            {/* Disconnected Holographic Wires */}
            <div className="absolute -left-8 sm:-left-12 top-1/3">
              <div className="relative">
                <div className="h-8 sm:h-12 w-1 bg-gradient-to-b from-green-400 to-transparent rounded-full transform rotate-12 animate-pulse"></div>
                <div className="absolute top-0 w-2 h-2 bg-green-400 rounded-full shadow-lg animate-ping"></div>
              </div>
              <div className="relative mt-2 sm:mt-4">
                <div className="h-8 sm:h-12 w-1 bg-gradient-to-b from-green-400 to-transparent rounded-full transform -rotate-12 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-0 w-2 h-2 bg-green-400 rounded-full shadow-lg animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            <div className="absolute -right-8 sm:-right-12 top-1/3">
              <div className="relative">
                <div className="h-8 sm:h-12 w-1 bg-gradient-to-b from-green-400 to-transparent rounded-full transform -rotate-12 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute top-0 w-2 h-2 bg-green-400 rounded-full shadow-lg animate-ping" style={{ animationDelay: '0.3s' }}></div>
              </div>
              <div className="relative mt-2 sm:mt-4">
                <div className="h-8 sm:h-12 w-1 bg-gradient-to-b from-green-400 to-transparent rounded-full transform rotate-12 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                <div className="absolute top-0 w-2 h-2 bg-green-400 rounded-full shadow-lg animate-ping" style={{ animationDelay: '0.8s' }}></div>
              </div>
            </div>
            
            {/* Energy Sparks */}
            <div className="absolute -left-4 sm:-left-6 top-1/2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-ping"></div>
              <div className="w-1 h-1 bg-white rounded-full animate-pulse mt-1 sm:mt-2"></div>
            </div>
            <div className="absolute -right-4 sm:-right-6 top-1/2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-1 h-1 bg-white rounded-full animate-pulse mt-1 sm:mt-2" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Content with Modern Typography */}
        <div className="space-y-3 sm:space-y-6">
          <div className="relative">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-400 animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 text-5xl sm:text-7xl md:text-8xl font-black text-green-400/10 blur-sm animate-pulse">
              404
            </div>
          </div>
          
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-white drop-shadow-lg">
            Connection <span className="text-green-400">Severed</span>
          </h2>
          
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            The neural pathways to this page have been disrupted. 
            <br className="hidden sm:block" />
            <span className="text-green-400">Reconnect</span> to restore access to the knowledge network.
          </p>

          {/* Modern 3D Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <button className="group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold rounded-lg sm:rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-400/25 text-sm sm:text-base">
              <div className="absolute inset-0 bg-white/20 rounded-lg sm:rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Return Home
              </div>
            </button>
            
            <button className="group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg sm:rounded-xl border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl text-sm sm:text-base">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent rounded-lg sm:rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                Explore Network
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;