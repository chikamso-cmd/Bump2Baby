
import React, { useEffect } from 'react';

const Toast = ({ message, description, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-8 z-[100] animate-in slide-in-from-right-10 fade-in duration-300">
      <div className="bg-white border border-slate-100 shadow-2xl rounded-2xl p-6 flex items-start gap-4 min-w-[320px]">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-[#1E293B]">{message}</h4>
          <p className="text-slate-400 text-sm mt-0.5">{description}</p>
        </div>
        <button onClick={onClose} className="text-slate-300 hover:text-slate-500 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;

// </ADDITIONAL_METADATA
//     const timer = setTimeout(onClose, 5000);
//     return () => clearTimeout(timer);
//   }, [onClose]);

//   return (
//     <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-8 z-[100] animate-in slide-in-from-right-10 fade-in duration-300">
//       <div className="bg-white border border-slate-100 shadow-2xl rounded-2xl p-6 flex items-start gap-4 min-w-[320px]">
//         <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
//           <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//             <polyline points="20 6 9 17 4 12"/>
//           </svg>
//         </div>
//         <div className="flex-1">
//           <h4 className="font-bold text-[#1E293B]">{message}</h4>
//           <p className="text-slate-400 text-sm mt-0.5">{description}</p>
//         </div>
//         <button onClick={onClose} className="text-slate-300 hover:text-slate-500 transition-colors">
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Toast;
