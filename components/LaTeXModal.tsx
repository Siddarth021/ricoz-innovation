'use client';

import React, { useState } from 'react';
import { Sparkles, Copy, Check, X, Download } from 'lucide-react';

interface LaTeXModalProps {
  isOpen: boolean;
  onClose: () => void;
  latexCode: string;
}

export const LaTeXModal: React.FC<LaTeXModalProps> = ({ isOpen, onClose, latexCode }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(latexCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTex = () => {
    const blob = new Blob([latexCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'main.tex';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Overleaf LaTeX Source Document</h3>
              <p className="text-xs text-slate-400">
                Matches the exact Computer Modern font, margins, booktabs tables, and structure of overleaf_upload (1).pdf
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-md shadow-emerald-900/30"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-white" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy LaTeX'}</span>
            </button>

            <button
              onClick={handleDownloadTex}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center space-x-1.5"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download .tex</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-950 font-mono text-xs text-slate-300 leading-relaxed border-b border-slate-800">
          <pre className="whitespace-pre-wrap">{latexCode}</pre>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <span>
            To view in Overleaf: Create a new blank project in Overleaf, replace <code>main.tex</code> with this code, and click <strong>Recompile</strong>.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
