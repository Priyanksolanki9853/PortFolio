import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Code2, Gamepad, Brain, Rocket } from 'lucide-react';

const domains = [
  {
    icon: Gamepad,
    title: 'Game Development',
    description: 'Creating interactive experiences using Unity & C#. Building immersive 3D worlds and gameplay mechanics.',
    color: 'primary',
  },
  {
    icon: Code2,
    title: 'Full Stack Web',
    description: 'Building scalable apps with React, Flask, and AWS. From frontend interfaces to backend APIs.',
    color: 'secondary',
  },
  {
    icon: Brain,
    title: 'AI/ML',
    description: 'Integrating intelligence into applications using Python. Machine learning and neural networks.',
    color: 'accent',
  },
  {
    icon: Rocket,
    title: 'Problem Solving',
    description: 'Active competitive programmer with strong grasp of Data Structures & Algorithms.',
    color: 'primary',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">About </span>
            <span className="gradient-text text-glow">Me</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            A versatile developer with a passion for building immersive worlds and intelligent systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl neon-border">
              <p className="text-lg text-foreground/90 font-body leading-relaxed mb-6">
                I am a versatile developer with a passion for building immersive worlds and 
                intelligent systems. From solving complex algorithmic problems to deploying 
                scalable web apps and rendering 3D environments, I love every part of the stack.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="text-primary" size={20} />
                  <span className="font-body">Bhopal, MP, India</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="text-secondary" size={20} />
                  <span className="font-body">CS Student</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 rounded-2xl border border-secondary/30"
            >
              <h3 className="text-xl font-display font-bold text-secondary mb-3">
                Current Focus
              </h3>
              <p className="text-muted-foreground font-body">
                Learning one commit at a time. Building games, exploring AI, and contributing to open source.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`glass-card p-6 rounded-2xl border border-${domain.color}/30 hover:border-${domain.color}/60 transition-all group cursor-pointer`}
              >
                <domain.icon className={`w-10 h-10 text-${domain.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className={`text-lg font-display font-bold text-${domain.color} mb-2`}>
                  {domain.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {domain.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
