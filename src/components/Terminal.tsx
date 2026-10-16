import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../utils/projects';

interface TerminalProps {
  onClose?: () => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => (
      <div className="space-y-2">
        <div className="text-cyber-green">Available commands:</div>
        <div className="ml-4 space-y-1">
          <div><span className="text-cyber-orange">about</span> - Learn more about me</div>
          <div><span className="text-cyber-orange">skills</span> - View my technical skills</div>
          <div><span className="text-cyber-orange">experience</span> - See my work experience</div>
          <div><span className="text-cyber-orange">education</span> - View my educational background</div>
          <div><span className="text-cyber-orange">projects</span> - Browse my projects</div>
          <div><span className="text-cyber-orange">contact</span> - Get my contact information</div>
          <div><span className="text-cyber-orange">social</span> - View my social media links</div>
          <div><span className="text-cyber-orange">resume</span> - Download my resume</div>
          <div><span className="text-cyber-orange">clear</span> - Clear the terminal</div>
          <div><span className="text-cyber-orange">whoami</span> - Display current user</div>
          <div><span className="text-cyber-orange">date</span> - Show current date and time</div>
        </div>
      </div>
    ),
    about: () => (
      <div className="space-y-2">
        <div className="text-cyber-green font-bold">👨‍💻 Titus Mbole (tito)</div>
        <div className="text-gray-300">
          Software Engineer | Full Stack Developer | Automation Engineer
        </div>
        <div className="mt-4 text-gray-400">
          IT professional with a robust background in various technology stacks.
          I excel at crafting innovative solutions tailored to the evolving digital landscape.
          Passionate about leveraging cutting-edge technologies to drive digital transformation
          and create value for individual-clients & organizations.
        </div>
        <div className="mt-4 space-y-1">
          <div>🎯 <span className="text-cyber-orange">Specialties:</span> Full Stack Development, Automation, Cloud Solutions</div>
          <div>📍 <span className="text-cyber-orange">Location:</span> Nairobi, Kenya</div>
          <div>💼 <span className="text-cyber-orange">Current Role:</span> Software Engineer @ Equity Group Holdings</div>
        </div>
      </div>
    ),
    skills: () => (
      <div className="space-y-4">
        <div className="text-cyber-green font-bold">🛠️ Technical Skills</div>
        
        <div>
          <div className="text-cyber-orange">Frontend Development:</div>
          <div className="ml-4 text-gray-300">React, Flutter, JavaScript, TypeScript, HTML5, CSS3, Tailwind, Bootstrap</div>
        </div>

        <div>
          <div className="text-cyber-orange">Backend Development:</div>
          <div className="ml-4 text-gray-300">Java Spring, Python, Django, Laravel, CodeIgniter, Node.js</div>
        </div>

        <div>
          <div className="text-cyber-orange">Database & Storage:</div>
          <div className="ml-4 text-gray-300">MongoDB, MySQL, PostgreSQL, Redis</div>
        </div>

        <div>
          <div className="text-cyber-orange">DevOps & Tools:</div>
          <div className="ml-4 text-gray-300">Git, GitHub, Azure, CI/CD, Docker, Bash Scripting</div>
        </div>

        <div>
          <div className="text-cyber-orange">Other:</div>
          <div className="ml-4 text-gray-300">REST APIs, Microservices, Agile/Scrum, Technical Writing</div>
        </div>
      </div>
    ),
    experience: () => (
      <div className="space-y-6">
        <div className="text-cyber-green font-bold">💼 Work Experience</div>
        
        <div className="border-l-2 border-cyber-green pl-4">
          <div className="text-cyber-orange font-semibold">Software Engineer</div>
          <div className="text-gray-400 text-sm">Equity Group Holdings | Apr 2023 - Present</div>
          <div className="text-gray-500 text-sm mb-2">Head Office - Nairobi, Kenya</div>
          <ul className="list-disc ml-4 text-gray-300 space-y-1 text-sm">
            <li>Develop and maintain Core banking Systems</li>
            <li>System Monitoring and Maintenance for web channels</li>
            <li>Incident Management and Troubleshooting</li>
            <li>Security and Compliance Management (GDPR, banking regulations)</li>
            <li>Software and Infrastructure Updates</li>
          </ul>
        </div>

        <div className="border-l-2 border-cyber-green pl-4">
          <div className="text-cyber-orange font-semibold">Software Developer</div>
          <div className="text-gray-400 text-sm">E&M Technology Has Ltd | Jan 2023 - Dec 2023</div>
          <div className="text-gray-500 text-sm mb-2">Tech City, Kenya</div>
          <ul className="list-disc ml-4 text-gray-300 space-y-1 text-sm">
            <li>Developed enterprise and web applications from inception to deployment</li>
            <li>Led development team in designing innovative solutions</li>
          </ul>
        </div>
      </div>
    ),
    education: () => (
      <div className="space-y-4">
        <div className="text-cyber-green font-bold">🎓 Education</div>
        
        <div className="border-l-2 border-cyber-green pl-4">
          <div className="text-cyber-orange font-semibold">Bachelor of Science in Computer Science</div>
          <div className="text-gray-400 text-sm">Kenyatta University</div>
          <div className="text-gray-500 text-sm">Graduated 2022</div>
        </div>

        <div className="mt-4">
          <div className="text-cyber-orange">Certifications & Training:</div>
          <ul className="list-disc ml-4 text-gray-300 space-y-1 text-sm mt-2">
            <li>Full Stack Development</li>
            <li>Cloud Technologies (Azure)</li>
            <li>Agile Software Development</li>
          </ul>
        </div>
      </div>
    ),
    projects: () => (
      <div className="space-y-4">
        <div className="text-cyber-green font-bold">🚀 Featured Projects</div>
        
        <div className="space-y-4">
          {
            PROJECTS.map((project, index) => (
              <div key={index} className="border border-cyber-green/20 p-3 rounded-lg bg-cyber-green/[0.02]">
                <div className="text-cyber-cyan font-semibold">{project.title}</div>
                <div className="text-gray-500 text-xs mb-2">{project.technologies.join(' • ')}</div>
                <div className="text-gray-400 text-xs">
                  {project.description}
                </div>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-cyber-green/70 text-xs hover:text-cyber-green mt-1 inline-block">→ {new URL(project.liveLink).hostname.replace('www.', '')}</a>
              </div>
            ))
          }
          
        </div>
      </div>
    ),
    contact: () => (
      <div className="space-y-4">
        <div className="text-cyber-green font-bold">📧 Contact Information</div>
        
        <div className="space-y-2">
          <div>
            <span className="text-cyber-orange">Email:</span>
            <a href="mailto:titus.eddys@gmail.com" className="text-blue-400 hover:underline ml-2">
              titus.eddys@gmail.com
            </a>
          </div>
          
          <div>
            <span className="text-cyber-orange">Location:</span>
            <span className="text-gray-300 ml-2">Nairobi, Kenya</span>
          </div>

          <div className="mt-4 text-gray-400">
            💡 Type <span className="text-cyber-orange">social</span> to see all my social media links
          </div>
        </div>
      </div>
    ),
    social: () => (
      <div className="space-y-4">
        <div className="text-cyber-green font-bold">🌐 Social Media & Links</div>
        
        <div className="space-y-2">
          <div>
            <span className="text-cyber-orange">GitHub:</span>
            <a 
              href="https://github.com/titusmbole" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline ml-2"
            >
              github.com/titusmbole
            </a>
          </div>
          
          <div>
            <span className="text-cyber-orange">LinkedIn:</span>
            <a 
              href="https://www.linkedin.com/in/titus-mbole-2aa53b408/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline ml-2"
            >
              linkedin.com/in/titus-kilunda
            </a>
          </div>
        </div>
      </div>
    ),
    resume: () => (
      <div className="space-y-4">
        <div className="text-cyber-green font-bold">📄 Resume / CV</div>
        
        <div className="space-y-2">
          <div className="text-gray-300">
            You can download my full resume here:
          </div>
          
          <a 
            href="/cv.pdf" 
            download
            className="inline-block px-4 py-2 bg-cyber-green/20 border border-cyber-green text-cyber-green rounded hover:bg-cyber-green/30 transition-colors"
          >
            📥 Download cv.pdf
          </a>

          <div className="text-gray-400 text-sm mt-4">
            Or send me an email at <a href="mailto:titus.eddys@gmail.com" className="text-blue-400 hover:underline">titus.eddys@gmail.com</a>
          </div>
        </div>
      </div>
    ),
    whoami: () => (
      <div className="text-cyber-green">guest@titus-portfolio</div>
    ),
    date: () => (
      <div className="text-gray-300">{new Date().toLocaleString()}</div>
    ),
    github: () => {
      window.open('https://github.com/titusmbole', '_blank');
      return <div className="text-gray-300">Opening GitHub profile...</div>;
    },
    linkedin: () => {
      window.open('https://www.linkedin.com/in/titus-mbole-2aa53b408/', '_blank');
      return <div className="text-gray-300">Opening LinkedIn profile...</div>;
    },
  };

  useEffect(() => {
    // Welcome message
    setHistory([
      {
        command: '',
        output: (
          <div className="space-y-3">
            <div className="text-cyber-green  font-bold text-sm sm:text-base">
              ┌─────────────────────────────────────────┐
            </div>
            <div className="text-cyber-green font-bold text-sm sm:text-base text-left px-4">
              ⚡ Titus Mbole — Interactive Terminal
            </div>
            <div className="text-cyber-green font-bold text-sm sm:text-base">
              └─────────────────────────────────────────┘
            </div>
            <div className="text-gray-500 text-xs mt-3">
              Founder of <span className="text-cyber-cyan">Imaradesk</span> • Software Engineer @ Equity
            </div>
            <div className="mt-4 space-y-1 text-xs sm:text-sm">
              <div className="text-gray-400">
                <span className="text-cyber-orange">help</span>
                <span className="text-gray-600 mx-2">—</span>
                available commands
              </div>
              <div className="text-gray-400">
                <span className="text-cyber-orange">projects</span>
                <span className="text-gray-600 mx-2">—</span>
                browse my work
              </div>
              <div className="text-gray-400">
                <span className="text-cyber-orange">about</span>
                <span className="text-gray-600 mx-2">—</span>
                learn more about me
              </div>
            </div>
          </div>
        ),
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    const output = trimmedCmd in commands 
      ? (commands as any)[trimmedCmd]()
      : (
        <div className="text-red-400">
          Command not found: {trimmedCmd}. Type <span className="text-cyber-orange">help</span> for available commands.
        </div>
      );

    setHistory(prev => [
      ...prev,
      {
        command: cmd,
        output,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);

    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="w-full max-w-4xl h-[85vh] sm:h-[80vh] relative flex flex-col overflow-hidden rounded-2xl"
      >
        {/* Outer glow */}
        <div className="absolute -inset-[1px] bg-gradient-to-b from-cyber-green/30 via-cyber-cyan/15 to-cyber-blue/20 rounded-2xl blur-[1px]"></div>

        <div className="relative flex flex-col h-full bg-[#080810] rounded-2xl border border-cyber-green/20 overflow-hidden shadow-[0_25px_80px_rgba(0,255,136,0.1)]">
          {/* Terminal Header */}
          <div className="relative px-4 sm:px-5 py-3 flex items-center justify-between bg-[#0c0c16] border-b border-cyber-green/10 flex-shrink-0">
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.5)] cursor-pointer hover:brightness-125 transition"
                onClick={onClose}
              ></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.5)]"></div>
            </div>

            {/* Tab */}
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-cyber-green/5 border border-cyber-green/15 rounded-md flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse"></div>
                <span className="text-[11px] font-mono text-cyber-green/80">titus@portfolio</span>
              </div>
            </div>

            {/* Close button (mobile) */}
            <button
              onClick={onClose}
              className="sm:hidden text-gray-500 hover:text-cyber-green transition-colors p-1"
              aria-label="Close terminal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Status */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-[10px] font-mono text-gray-600">zsh</span>
              <span className="text-gray-700">|</span>
              <span className="text-[10px] font-mono text-gray-600">utf-8</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="flex-1 overflow-y-auto p-4 sm:p-6 font-mono text-xs sm:text-sm relative"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Subtle scan line */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-green/5 to-transparent animate-[scan_8s_linear_infinite]"></div>
            </div>

            <AnimatePresence>
              {history.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="mb-5"
                >
                  {item.command && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-cyber-pink/80 select-none">❯</span>
                      <span className="text-cyber-green/70">~</span>
                      <span className="text-gray-300">{item.command}</span>
                      <span className="ml-auto text-[10px] text-gray-700 font-mono">{item.timestamp}</span>
                    </div>
                  )}
                  <div className="pl-5 border-l border-cyber-green/10">{item.output}</div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
              <span className="text-cyber-pink/80 select-none">❯</span>
              <span className="text-cyber-green/70">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-gray-200 caret-cyber-green placeholder-gray-700 font-mono"
                autoFocus
                spellCheck={false}
                placeholder="type a command..."
              />
            </form>
          </div>

          {/* Footer status bar */}
          <div className="px-4 sm:px-5 py-2 bg-[#0c0c16] border-t border-cyber-green/8 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3 text-[10px] font-mono text-gray-600">
              <span className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-green/60"></div>
                ready
              </span>
              <span>{history.length} entries</span>
            </div>
            <div className="text-[10px] font-mono text-gray-600">
              ↑↓ history • type <span className="text-cyber-green/50">help</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Terminal;
