import React, {useContext, useState} from 'react'
import {MovieContext} from '../context/index.js';
import {toast} from 'react-toastify';
import {getImgUrl} from '../utils/utility.image.js';
import Delete from '../assets/delete.svg'
import Checkout from '../assets/icons/checkout.svg'

export const CartDetails = ({onClose}) => {
  const {state, dispatch} = useContext(MovieContext)
  const [showClearModal, setShowClearModal] = useState(false)
  const handleDeleteCart = (item) => {
    dispatch({
      type: 'remove_cart',
      payload: item
    })
    toast.success(`Removed ${item.title} form cart`)
  }
  const handleClearCart = () => {
    dispatch({
      type: 'clear_cart'
    })
    toast.success("Cart cleared successfully!");
    setShowClearModal(false)
  }
  const hasItems = state.cartData.length > 0
  const totalPrice = state.cartData.reduce((total, item) => total + Number(item.price), 0)
  return (
    <>
      {/* Clear Cart Confirmation Modal */}
      {showClearModal && (
        <div
          className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowClearModal(false)}
        >
          <div
            className="bg-white dark:bg-[#12141D] rounded-2xl p-6 max-w-md w-full shadow-2xl border border-black/5 dark:border-white/5 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-600 dark:text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
              Clear cart?
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              Are you sure you want to clear all {state.cartData.length}{" "}
              {state.cartData.length === 1 ? "item" : "items"} from your cart?
              This action cannot be undone.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowClearModal(false)}
                className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Cancel
              </button>
              <button
                onClick={handleClearCart}
                className="flex-1 px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Cart Modal */}
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        onClick={onClose}
      >
        <div
          className="w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] max-h-[90vh] overflow-hidden animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white dark:bg-[#12141D] shadow-2xl rounded-3xl overflow-hidden p-6 md:p-9 border border-black/5 dark:border-white/5 relative flex flex-col max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-6 lg:mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl lg:text-[36px] font-bold text-gray-900 dark:text-white mb-2">
                  Shopping Cart
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {state.cartData.length}{" "}
                  {state.cartData.length === 1 ? "item" : "items"} in your cart
                </p>
              </div>

              {hasItems && (
                <button
                  onClick={() => setShowClearModal(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <span className="max-md:hidden">Clear All</span>
                </button>
              )}
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-auto mb-6 lg:mb-8 pr-2 custom-scrollbar">
              {state.cartData.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <svg
                    className="w-24 h-24 text-gray-300 dark:text-gray-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your cart is empty
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Add some movies to get started!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {state.cartData.map((item) => (
                    <div
                      key={item.id}
                      className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center gap-4">
                        {/* Movie Image */}
                        <div className="relative flex-shrink-0 overflow-hidden rounded-lg">
                          <img
                            className="w-16 h-20 md:w-20 md:h-28 object-cover transition-transform duration-300 group-hover:scale-110"
                            src={getImgUrl(item.cover)}
                            alt={item.title}
                          />
                        </div>

                        {/* Movie Details */}
                        <div className="flex-grow min-w-0">
                          <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white mb-1 truncate">
                            {item.title}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {item.genre}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-lg md:text-xl font-bold text-primary dark:text-primary">
                              ${Number(item.price || 0).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        {/* Delete Button */}
                        <button
                          className="flex-shrink-0 bg-red-500 hover:bg-red-600 rounded-lg p-2 md:px-4 md:py-2.5 inline-flex items-center gap-2 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                          onClick={() => handleDeleteCart(item)}
                        >
                          <img
                            className="w-5 h-5"
                            src={Delete}
                            alt="delete"
                          />
                          <span className="max-md:hidden">Remove</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer with Total and Actions */}
            {hasItems && (
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex items-center justify-between mb-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Total Amount
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-primary dark:text-primary">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    className="w-full sm:flex-1 bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary rounded-xl py-3 px-6 inline-flex items-center justify-center gap-2 text-black font-bold text-sm shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95"
                    type="button"
                  >
                    <img
                      src={Checkout}
                      width="20"
                      height="20"
                      alt="Checkout"
                    />
                    <span>Proceed to Checkout</span>
                  </button>
                  <button
                    className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 rounded-xl py-3 px-6 inline-flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                    type="button"
                    onClick={onClose}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
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

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 4px;
        }

        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4a5568;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
        }

        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #718096;
        }
      `}</style>
    </>
  )
}
