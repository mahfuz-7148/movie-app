import {getImgUrl} from '../utils/utility.image.js';

export default function MovieDetailsModal({movie, onClose, onCartAdd}) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-105 sm:max-w-150 lg:max-w-246 max-h-[90vh] overflow-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white dark:bg-[#12141D] shadow-2xl rounded-3xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden border border-black/5 dark:border-white/5 relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 dark:bg-white/10 backdrop-blur-sm hover:bg-black/70 dark:hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Movie Image with gradient overlay */}
          <div className="sm:order-2 relative overflow-hidden group">
            <img
              className="w-full object-cover h-full max-sm:max-h-[300px] transition-transform duration-700 group-hover:scale-110"
              src={getImgUrl(`${movie.cover}`)}
              alt={movie.title}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Price badge */}
            <div className="absolute top-4 left-4 bg-primary text-black font-bold px-4 py-2 rounded-full text-base shadow-lg backdrop-blur-sm">
              ${movie.price}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-11 flex flex-col">
            <div className="mb-6">
              <h2 className="text-3xl lg:text-[50px] mb-3 font-bold text-gray-900 dark:text-white leading-tight">
                {movie.title}
              </h2>
              <span className="inline-block text-sm font-semibold text-primary dark:text-primary bg-primary/10 dark:bg-primary/10 px-3 py-1.5 rounded-full">
                {movie.genre}
              </span>
            </div>

            <p className="text-sm lg:text-base mb-8 lg:mb-12 text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
              {movie.description}
            </p>

            {/* Action buttons */}
            <div className="grid lg:grid-cols-2 gap-3 mt-auto">
              <button
                className="bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary rounded-xl py-3 px-5 flex items-center justify-center gap-2 text-black font-bold text-sm shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={(e) => onCartAdd(e, movie)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Add to Cart - ${movie.price}</span>
              </button>
              <button
                className="border-2 border-gray-300 dark:border-gray-600 rounded-xl py-3 px-5 flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={onClose}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
          @keyframes fadeIn {
              from {
                  opacity: 0;
              }
              to {
                  opacity: 1;
              }
          }

          @keyframes slideUp {
              from {
                  opacity: 0;
                  transform: translateY(20px);
              }
              to {
                  opacity: 1;
                  transform: translateY(0);
              }
          }

          .animate-fadeIn {
              animation: fadeIn 0.3s ease-out;
          }

          .animate-slideUp {
              animation: slideUp 0.4s ease-out;
          }
      `}</style>
    </div>
  );
}