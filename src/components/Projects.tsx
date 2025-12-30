import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Gamepad2, Brain, Car, Scale, Crosshair, PersonStanding } from 'lucide-react';

const projects = [
  {
    title: 'Gaming Portal',
    description: 'An immersive, cyberpunk-themed game developer portfolio. Features a single-page architecture (SPA), global leaderboard powered by Supabase, embedded HTML5 arcade games, and interactive 3D UI effects.',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=60',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Supabase'],
    github: 'https://github.com/Priyanksolanki9853/Gaming_Portal',
    demo: 'https://priyanksolanki9853.github.io/Gaming_Portal/',
    icon: Gamepad2,
    color: 'primary',
  },
  {
    title: 'MYTHICAL DUNGEON',
    description: 'A 3D Action-RPG dungeon crawler built in Unity. Battle mech enemies, explore techno-ruins, and collect loot in this 2-level open world adventure.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60',
    tech: ['Unity', 'C#', 'ShaderLab', '3D Graphics'],
    github: 'https://github.com/Priyanksolanki9853/MYTHICAL_DUNGEON',
    demo: 'https://priyank-solanki.itch.io/mythical-dungeon',
    icon: Gamepad2,
    color: 'secondary',
  },
  {
    title: 'Sharp Shooter',
    description: 'A fast-paced 3D First-Person Shooter (FPS) developed in Unity & C#. Battle waves of enemy drones, utilize multiple weapons, and survive in an open-world arena.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0e?w=800&auto=format&fit=crop&q=60',
    tech: ['Unity', 'C#', 'ShaderLab', 'FPS Mechanics'],
    github: 'https://github.com/Priyanksolanki9853/Sharp_Shooter',
    demo: 'https://priyank-solanki.itch.io/sharp-shooter',
    icon: Crosshair,
    color: 'accent',
  },
  {
    title: 'ESCAPE',
    description: 'A 3D endless runner built in Unity. Control the Prince, dodge oncoming obstacles, collect coins, and survive the speed-run challenge.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f2f60?w=800&auto=format&fit=crop&q=60',
    tech: ['Unity', 'C#', 'Infinite Runner', '3D'],
    github: 'https://github.com/Priyanksolanki9853/ESCAPE',
    demo: 'https://priyank-solanki.itch.io/escape',
    icon: PersonStanding,
    color: 'primary',
  },
  {
    title: 'SafeRoute AI',
    description: 'An AI-powered navigation system that analyzes road geometry, weather, and infrastructure to calculate the safest path, not just the fastest one.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=60',
    tech: ['Python', 'AI/ML', 'Flask', 'HTML'],
    github: 'https://github.com/Priyanksolanki9853/SafeRoute-AI',
    demo: 'https://github.com/Priyanksolanki9853/SafeRoute-AI',
    icon: Car,
    color: 'secondary',
  },
  {
    title: 'NYAYA.ai',
    description: 'A Next-Gen Legal Intelligence Platform. Uses RAG & Llama-3 to simplify the Indian Constitution & Bhartiya Nyaya Sanhita (BNS). Features AI Judge, Doc Drafting & Semantic Search.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=60',
    tech: ['Python', 'Llama-3', 'RAG', 'HTML'],
    github: 'https://github.com/Priyanksolanki9853/NYAYA.ai',
    demo: 'https://github.com/Priyanksolanki9853/NYAYA.ai',
    icon: Scale,
    color: 'accent',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Featured </span>
            <span className="gradient-text-secondary text-glow-secondary">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Games, AI applications, and web projects that showcase my skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className={`absolute top-4 right-4 p-2 glass-card rounded-lg text-${project.color}`}>
                  <project.icon size={24} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-display font-bold text-${project.color} mb-2`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-body bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 glass-card rounded-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center gap-2 px-4 py-2 bg-${project.color}/20 text-${project.color} rounded-lg font-body font-semibold text-sm hover:bg-${project.color}/30 transition-colors`}
                  >
                    <ExternalLink size={16} />
                    {project.title.includes('DUNGEON') || project.title.includes('Shooter') || project.title.includes('ESCAPE') ? 'Play Game' : 'View Demo'}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
