import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ChevronDown, Download } from 'lucide-react';
import Scene3D from './Scene3D';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scanline">
      <Scene3D />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-6"
          >
            <div className="relative">
              <div className="w-40 h-40 rounded-full border-4 border-primary overflow-hidden animate-glow-pulse">
                <img
                  src="https://avatars.githubusercontent.com/u/180370754?v=4"
                  alt="Priyank Solanki"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 rounded-full border border-primary/30 animate-rotate-slow" />
              <div className="absolute -inset-4 rounded-full border border-secondary/20 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-display text-lg mb-4 tracking-widest"
          >
            WELCOME TO MY DIGITAL REALM
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
          >
            <span className="text-foreground">I'm </span>
            <span className="gradient-text text-glow">Priyank</span>
            <br />
            <span className="gradient-text-secondary text-glow-secondary">Solanki</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <span className="px-4 py-2 glass-card rounded-full text-primary font-body font-semibold border border-primary/30">
              🎮 Game Developer
            </span>
            <span className="px-4 py-2 glass-card rounded-full text-secondary font-body font-semibold border border-secondary/30">
              👨‍💻 Full Stack Dev
            </span>
            <span className="px-4 py-2 glass-card rounded-full text-accent font-body font-semibold border border-accent/30">
              🧠 AI/ML Enthusiast
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-body leading-relaxed"
          >
            CS Student from Bhopal, India. Passionate about building immersive worlds, 
            intelligent systems, and solving complex problems through code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-display font-bold rounded-lg overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://drive.google.com/file/d/1HmLlD0r-6R-x-O4Y3Dm3kufEG3ly7L-b/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary text-primary font-display font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/Priyanksolanki9853', color: 'hover:text-foreground' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/priyanksolanki9853/', color: 'hover:text-blue-400' },
              { icon: Instagram, href: 'https://www.instagram.com/_priyank_thakur_/', color: 'hover:text-pink-400' },
            ].map(({ icon: Icon, href, color }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className={`p-3 glass-card rounded-xl text-muted-foreground ${color} transition-colors`}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-primary"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
