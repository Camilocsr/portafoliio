import React, { useEffect, useState } from "react";
import { Code2, X, Sparkles, ArrowRight } from "lucide-react";

type BannerProps = {
  hide: boolean;
  setHide: (hide: boolean) => void;
};

const BANNER_KEY = "hide-banner";

const Banner = ({ hide, setHide }: BannerProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const hideBanner = localStorage.getItem(BANNER_KEY);
    if (hideBanner) return;

    const bannerTimer = setTimeout(() => {
      setHide(false);
      setAnimate(true);
    }, 1000);

    return () => clearTimeout(bannerTimer);
  }, []);

  const handleBannerClose = () => {
    setAnimate(false);
    setTimeout(() => {
      setHide(true);
      localStorage.setItem(BANNER_KEY, "1");
    }, 300);
  };

  if (hide) return null;

  return (
    <div 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-3xl transition-all duration-300 ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-[1px] rounded-lg shadow-lg">
        <div className="bg-black/90 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 bg-blue-500/20 p-2 rounded-lg">
              <Code2 className="w-6 h-6 text-blue-400 animate-pulse" />
            </div>
            
            <div className="flex-1 flex items-center justify-between gap-4">
              <div className="text-sm text-gray-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-base bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    ¡Bienvenido a mi Portfolio Digital!
                  </span>
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-gray-300">
                    Transformando ideas en soluciones innovadoras
                  </span>
                  <span className="hidden sm:inline text-gray-400">•</span>
                  <span className="text-blue-400 font-medium">
                    Juntos podemos crear algo extraordinario
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handleBannerClose}
                  className="p-1.5 hover:bg-white/10 rounded-md transition-colors group"
                  aria-label="Cerrar banner"
                >
                  <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-2 text-xs text-gray-400 flex items-center gap-1">
            <ArrowRight className="w-3 h-3" />
            <span>Desarrollador Full Stack especializado en crear experiencias digitales excepcionales</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;