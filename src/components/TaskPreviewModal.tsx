import React, { useState } from 'react';
import { CloseIcon, CheckCircleIcon, ArrowRightIcon } from './Icons';

interface TaskPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskType: 'static' | 'portfolio' | 'js';
}

export const TaskPreviewModal: React.FC<TaskPreviewModalProps> = ({ isOpen, onClose, taskType }) => {
  // State for Task 1: Static Website Tab simulation
  const [staticTab, setStaticTab] = useState<'home' | 'about' | 'products' | 'contact'>('home');
  // State for Task 2: Portfolio filter simulation
  const [portfolioFilter, setPortfolioFilter] = useState<'all' | 'web' | 'mobile'>('all');
  // State for Task 3: Interactive JS Demo states
  const [counter, setCounter] = useState(42);
  const [inputText, setInputText] = useState('Hello JavaScript World!');
  const [selectedColor, setSelectedColor] = useState('#2563EB');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, text: 'Master semantic HTML tags', done: true },
    { id: 2, text: 'Build responsive grid with CSS', done: true },
    { id: 3, text: 'Add click event listeners in JS', done: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  if (!isOpen) return null;

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo.trim(), done: false }]);
    setNewTodo('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="task-modal-title"
    >
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl bg-[#101B35] text-white rounded-3xl shadow-2xl border border-slate-700/80 overflow-hidden z-10 animate-in zoom-in-95 duration-200 my-6 max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span id="task-modal-title" className="text-sm font-mono text-slate-300 ml-2">
              {taskType === 'static' && 'interactive-preview // static-multi-page-website'}
              {taskType === 'portfolio' && 'interactive-preview // personal-portfolio-page'}
              {taskType === 'js' && 'live-sandbox // javascript-interactivity-demo'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TASK 1 PREVIEW */}
          {taskType === 'static' && (
            <div className="space-y-6">
              <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">
                    Static Multi-Page Architecture Demonstration
                  </h4>
                  <p className="text-xs text-slate-300">
                    Demonstrating HTML5 semantic outline, CSS grid layout, and responsive navigation links.
                  </p>
                </div>
                {/* Simulated navigation */}
                <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-700 text-xs">
                  {(['home', 'about', 'products', 'contact'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setStaticTab(tab)}
                      className={`px-3 py-1.5 rounded-lg capitalize transition-colors ${
                        staticTab === tab ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulated Browser Viewport */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 min-h-[320px]">
                {staticTab === 'home' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                      &lt;header role="banner"&gt;
                    </span>
                    <h3 className="text-2xl font-bold text-white">Apex Craft Supplies & Goods</h3>
                    <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
                      Welcome to the sample static multi-page project. This layout demonstrates pure HTML & CSS styling without complex framework overhead. Clean markup guarantees rapid loading and flawless accessibility.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-xs font-mono text-blue-400">Section 01</span>
                        <h5 className="font-semibold text-white mt-1">Semantic Outline</h5>
                        <p className="text-xs text-slate-400 mt-1">Structured with main, nav, aside and section nodes.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-xs font-mono text-cyan-400">Section 02</span>
                        <h5 className="font-semibold text-white mt-1">Fluid CSS Grid</h5>
                        <p className="text-xs text-slate-400 mt-1">Auto-fit minmax responsive grid column layout.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-xs font-mono text-purple-400">Section 03</span>
                        <h5 className="font-semibold text-white mt-1">Responsive Media</h5>
                        <p className="text-xs text-slate-400 mt-1">Scalable aspect-ratio containers and vector SVGs.</p>
                      </div>
                    </div>
                  </div>
                )}

                {staticTab === 'about' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                      &lt;section id="about"&gt;
                    </span>
                    <h3 className="text-xl font-bold text-white">About the Craft Supplies Foundation</h3>
                    <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                      Established to bridge handcrafted excellence with modern web presentation. The static architecture ensures zero server maintenance costs and instant TTFB (Time to First Byte).
                    </p>
                    <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 text-xs text-blue-200">
                      💡 Static pages can be served from free CDN edge nodes worldwide with 99.999% uptime.
                    </div>
                  </div>
                )}

                {staticTab === 'products' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                      &lt;section class="product-catalog"&gt;
                    </span>
                    <h3 className="text-xl font-bold text-white">Featured Catalog Grid</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm text-white">Artisan Pottery Set</p>
                          <p className="text-xs text-slate-400">Handmade ceramic clay</p>
                        </div>
                        <span className="text-cyan-400 font-bold text-sm">$48.00</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm text-white">Natural Linen Canvas</p>
                          <p className="text-xs text-slate-400">Organic woven fiber</p>
                        </div>
                        <span className="text-cyan-400 font-bold text-sm">$32.00</span>
                      </div>
                    </div>
                  </div>
                )}

                {staticTab === 'contact' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                      &lt;form action="#" method="POST"&gt;
                    </span>
                    <h3 className="text-xl font-bold text-white">Static Contact Form Markup</h3>
                    <p className="text-slate-400 text-xs">
                      Includes semantic &lt;label&gt; tags linked to inputs with matching id and name attributes.
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                        Input: Name [placeholder="John Doe"]
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                        Input: Email [placeholder="john@example.com"]
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TASK 2 PREVIEW */}
          {taskType === 'portfolio' && (
            <div className="space-y-6">
              <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">
                    Personal Portfolio Showcase Demonstration
                  </h4>
                  <p className="text-xs text-slate-300">
                    Single-page layout, custom typography, interactive filterable project gallery, and CSS animations.
                  </p>
                </div>
                {/* Category filters */}
                <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-700 text-xs">
                  {(['all', 'web', 'mobile'] as const).map(cat => (
                    <button
                      key={cat}
                      onClick={() => setPortfolioFilter(cat)}
                      className={`px-3 py-1.5 rounded-lg capitalize transition-colors ${
                        portfolioFilter === cat ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Portfolio Viewport */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 flex-shrink-0">
                    <img
                      src="/images/innovator-profile.jpg"
                      alt="Portfolio author preview"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      Portfolio Author
                    </span>
                    <h3 className="text-xl font-bold text-white">Alex Morgan — Creative Developer</h3>
                    <p className="text-xs text-slate-300">
                      Crafting human-first digital experiences with clean code and modern aesthetics.
                    </p>
                  </div>
                </div>

                {/* Filtered Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(portfolioFilter === 'all' || portfolioFilter === 'web') && (
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition-colors">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Web App</span>
                      <h5 className="font-bold text-white text-sm">FinTech Modern Portal</h5>
                      <p className="text-xs text-slate-400">React, Tailwind CSS, Responsive Design with accessible tables.</p>
                      <span className="inline-block text-[10px] text-emerald-400 font-mono">Status: Live Preview</span>
                    </div>
                  )}

                  {(portfolioFilter === 'all' || portfolioFilter === 'mobile') && (
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition-colors">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">Mobile Responsive</span>
                      <h5 className="font-bold text-white text-sm">Mindful Wellness Platform</h5>
                      <p className="text-xs text-slate-400">Touch gestures, dark mode toggle, smooth CSS animations.</p>
                      <span className="inline-block text-[10px] text-emerald-400 font-mono">Status: Live Preview</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TASK 3 PREVIEW: FULL JAVASCRIPT SANDBOX */}
          {taskType === 'js' && (
            <div className="space-y-6">
              <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700">
                <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">
                  Interactive JavaScript Sandbox & Event Listeners
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Test functional event listeners, real-time input state validation, dynamic array management, and custom modal dropdowns in real time.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Counter & Event Listeners */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400">Feature 1: Event Listeners</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">onClick state</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Click buttons to dispatch events modifying the counter state variable:
                  </p>
                  <div className="flex items-center justify-center gap-4 py-3 bg-slate-900 rounded-xl border border-slate-800">
                    <button
                      onClick={() => setCounter(c => Math.max(0, c - 1))}
                      className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg active:scale-95 transition-all"
                      aria-label="Decrement"
                    >
                      -
                    </button>
                    <span className="text-3xl font-extrabold text-cyan-400 font-mono min-w-[3rem] text-center">
                      {counter}
                    </span>
                    <button
                      onClick={() => setCounter(c => c + 1)}
                      className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg active:scale-95 transition-all"
                      aria-label="Increment"
                    >
                      +
                    </button>
                    <button
                      onClick={() => setCounter(0)}
                      className="text-xs text-slate-400 hover:text-white underline ml-2"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                {/* 2. Real-time Input Validation */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-purple-400">Feature 2: Live Form Validation</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">onInput / onChange</span>
                  </div>
                  <div>
                    <label htmlFor="js-input-test" className="text-xs text-slate-400 block mb-1">
                      Type something to test dynamic character validation:
                    </label>
                    <input
                      id="js-input-test"
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-slate-400">
                      Length: <strong className="text-white font-mono">{inputText.length}</strong> chars
                    </span>
                    <span className={`font-semibold ${inputText.length >= 8 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {inputText.length >= 8 ? '✓ Valid input threshold met' : '⚠ Minimum 8 characters needed'}
                    </span>
                  </div>
                </div>

                {/* 3. Interactive Dropdown Menu */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400">Feature 3: Dropdown & Theme State</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Toggle component</span>
                  </div>
                  <p className="text-xs text-slate-400">Select an accent color theme dynamically:</p>
                  
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between text-xs font-semibold text-white hover:bg-slate-850"
                      aria-expanded={dropdownOpen}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: selectedColor }} />
                        <span>Active Accent Color: {selectedColor}</span>
                      </div>
                      <span>▼</span>
                    </button>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-slate-900 border border-slate-700 rounded-xl p-2 z-20 space-y-1">
                        {[
                          { name: 'Electric Blue', hex: '#2563EB' },
                          { name: 'Vibrant Cyan', hex: '#06B6D4' },
                          { name: 'Neon Purple', hex: '#8B5CF6' },
                          { name: 'Emerald Tech', hex: '#10B981' },
                        ].map((col) => (
                          <button
                            key={col.hex}
                            onClick={() => {
                              setSelectedColor(col.hex);
                              setDropdownOpen(false);
                            }}
                            className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-left text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
                          >
                            <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: col.hex }} />
                            <span>{col.name} ({col.hex})</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* 4. Interactive Todo List (DOM array manipulation) */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400">Feature 4: Dynamic Array State</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Array CRUD</span>
                  </div>

                  <form onSubmit={addTodo} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add an interactive task..."
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 active:scale-95"
                    >
                      Add
                    </button>
                  </form>

                  <ul className="space-y-1.5 max-h-32 overflow-y-auto">
                    {todos.map(item => (
                      <li
                        key={item.id}
                        onClick={() => toggleTodo(item.id)}
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800 text-xs cursor-pointer transition-colors"
                      >
                        <span className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${item.done ? 'bg-cyan-500 border-cyan-400 text-slate-950 font-bold' : 'border-slate-600'}`}>
                          {item.done ? '✓' : ''}
                        </span>
                        <span className={`flex-1 ${item.done ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            Task completed successfully with pure client-side standard browser APIs.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
