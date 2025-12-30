import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Gamepad2, Brain, Car, Scale, Crosshair, PersonStanding, Rocket, Target, Bird, Flag, Globe } from 'lucide-react';

const projectCategories = {
  games: {
    title: 'Games',
    subtitle: 'Unity & Web-based Games',
    icon: Gamepad2,
    color: 'primary',
    projects: [
      {
        title: 'MYTHICAL DUNGEON',
        description: 'A 3D Action-RPG dungeon crawler built in Unity. Battle mech enemies, explore techno-ruins, and collect loot in this 2-level open world adventure.',
        image: 'https://private-user-images.githubusercontent.com/180370754/525867888-7710555b-dcad-4b70-8b42-c4bfbfef6df5.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcxMDg1MDUsIm5iZiI6MTc2NzEwODIwNSwicGF0aCI6Ii8xODAzNzA3NTQvNTI1ODY3ODg4LTc3MTA1NTViLWRjYWQtNGI3MC04YjQyLWM0YmZiZmVmNmRmNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQxNTIzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02Y2NkMWNhN2Q3NTkwNzVmYmE0N2QxYzNiOGQ0MDgxZjQ2YzAwMjg1MjFhMzk3MTAzNmQ1OGZlYjA4YTNmOTUxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.5NCYkBXsqc8PgIsGXtUtmy5h-v_ep08DuhXkED1YAbY',
        tech: ['Unity', 'C#', 'ShaderLab', 'Blender'],
        github: 'https://github.com/Priyanksolanki9853/MYTHICAL_DUNGEON',
        demo: 'https://priyank-solanki.itch.io/mythical-dungeons',
        icon: Gamepad2,
      },
      {
        title: 'Sharp Shooter',
        description: 'A fast-paced 3D First-Person Shooter (FPS) developed in Unity & C#. Battle waves of enemy drones, utilize multiple weapons, and survive in an open-world arena.',
        image: 'https://private-user-images.githubusercontent.com/180370754/525855036-0a1e6f72-56b8-4e60-a94a-c2aa57e391f3.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcxMDg1ODUsIm5iZiI6MTc2NzEwODI4NSwicGF0aCI6Ii8xODAzNzA3NTQvNTI1ODU1MDM2LTBhMWU2ZjcyLTU2YjgtNGU2MC1hOTRhLWMyYWE1N2UzOTFmMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQxNTI0NDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MzZkNjc1MmNlYmQ1MWI3MWZkMGE2ZjZkMjU4MWJlZjNhYjY0ZGQwNWZkZDE5OGM5ZDdlZTVlZmQ0NjZlMTg1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.caoodGOmLT1xDE1cF_2fJ-eJphhsRyUIj09LK4fme8k',
        tech: ['Unity', 'C#', 'ShaderLab', 'FPS Mechanics'],
        github: 'https://github.com/Priyanksolanki9853/Sharp_Shooter',
        demo: 'https://priyank-solanki.itch.io/shoot-it',
        icon: Crosshair,
      },
      {
        title: 'ESCAPE',
        description: 'A 3D endless runner built in Unity. Control the Prince, dodge oncoming obstacles, collect coins, and survive the speed-run challenge.',
        image: 'https://private-user-images.githubusercontent.com/180370754/525882541-56ac2776-b439-4bfa-848c-eaf84416134e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcxMDg0MTMsIm5iZiI6MTc2NzEwODExMywicGF0aCI6Ii8xODAzNzA3NTQvNTI1ODgyNTQxLTU2YWMyNzc2LWI0MzktNGJmYS04NDhjLWVhZjg0NDE2MTM0ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQxNTIxNTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05YTFkMjE5ZDU1ZDQ0YzAzYjdjMDRlOTYxMjhmYTZjYTY0Y2M1NGZkZGJlMmIxMjUzY2MwMjU5YThkMmY0OTk4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.iq74E8dSR8cJwmWnrBGPkia5c5DZhPaE9FDS9URCwcs',
        tech: ['Unity', 'C#', 'Endless Runner', '3D'],
        github: 'https://github.com/Priyanksolanki9853/ESCAPE',
        demo: 'https://priyank-solanki.itch.io/escape',
        icon: PersonStanding,
      },
      {
        title: 'Rocket Boost',
        description: 'A physics-based 2D sci-fi platformer built with Unity 6 and C#. Navigate the rocket through alien terrain and avoid obstacles!',
        image: 'https://private-user-images.githubusercontent.com/180370754/525636197-8a402cd7-55d2-4f6b-862e-cdec41da95e4.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcxMDgzNzQsIm5iZiI6MTc2NzEwODA3NCwicGF0aCI6Ii8xODAzNzA3NTQvNTI1NjM2MTk3LThhNDAyY2Q3LTU1ZDItNGY2Yi04NjJlLWNkZWM0MWRhOTVlNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQxNTIxMTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kY2JkOWFkYThiZWIzOTQwNjVlN2RjOTg4NDJhMTRiOTQ5NzgwZTlmMzQ5NjA2MmZiNWYyZjdjOTAxMDA2MzhlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.6AiTEEgkM2iSlhUtB4RA8pHQxdriozW-LgcyIFu4USs',
        tech: ['Unity 6', 'C#', 'Physics', '2D Platformer'],
        github: 'https://github.com/Priyanksolanki9853/Rocket_Boost',
        demo: 'https://priyank-solanki.itch.io/rocket-boost',
        icon: Rocket,
      },
      {
        title: 'Obstacle Dodge',
        description: 'A basic 3D arcade survival game built to learn Unity basics. Control the player, dodge falling projectiles, and master collision physics.',
        image: 'https://private-user-images.githubusercontent.com/180370754/525893160-d9bf33e7-8b9a-444e-9b58-3eb84e1e8737.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcxMDgxMTEsIm5iZiI6MTc2NzEwNzgxMSwicGF0aCI6Ii8xODAzNzA3NTQvNTI1ODkzMTYwLWQ5YmYzM2U3LThiOWEtNDQ0ZS05YjU4LTNlYjg0ZTFlODczNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQxNTE2NTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00Zjc2ZTIxZDRhNWRiMzM4NDU2NTc0YjM1MjQ5YTgzMmI2N2EwYjkwM2EzYzhmNGRjMmE3ZDEyZjJkZjFhNWE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.yDech6pQHc1QZrhXwIfEi9E3oYWWMSZrp5UvPSeZb-M',
        tech: ['Unity', 'C#', 'Arcade', 'Physics'],
        github: 'https://github.com/Priyanksolanki9853/Obstacle_Dodge',
      
        icon: Target,
      },
      {
        title: 'MINI GOLF',
        description: 'A 3D Mini Golf arcade game with 5 levels. Putt your way through windmills, bridges, and obstacles in this physics-based Unity game.',
        image: 'https://private-user-images.githubusercontent.com/180370754/525898776-e7d5c6bd-6b85-4e9e-b3eb-b32cd0128960.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcxMDgzMjksIm5iZiI6MTc2NzEwODAyOSwicGF0aCI6Ii8xODAzNzA3NTQvNTI1ODk4Nzc2LWU3ZDVjNmJkLTZiODUtNGU5ZS1iM2ViLWIzMmNkMDEyODk2MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQxNTIwMjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wOGU3MWUxNDlhODIyZjk2MTcyYmQ5NWEwNjM5NDVkZTRiODhhYmU3OWE3YTAxZmZmMTM2YjU1YWZlNDNmOGMzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.KyG0eQwSMWqAwqCUxdiuh6aYx3vC-XRwylqCmbqkpdg',
        tech: ['Unity', 'C#', 'Physics', 'Casual Game'],
        github: 'https://github.com/Priyanksolanki9853/MINI_GOLF',
      
        icon: Flag,
      },
      {
        title: 'Flappy Bird Clone',
        description: 'A lightweight, browser-based clone of Flappy Bird built with HTML5, CSS3, and Vanilla JavaScript. Features smooth rendering and score tracking.',
        image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=800&auto=format&fit=crop&q=60',
        tech: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Browser Game'],
        github: 'https://github.com/Priyanksolanki9853/Flappy_Bird_Clone',
        demo: 'https://priyanksolanki9853.github.io/Flappy_Bird_Clone/',
        icon: Bird,
      },
    ],
  },
  ai: {
    title: 'AI Projects',
    subtitle: 'Machine Learning & AI Applications',
    icon: Brain,
    color: 'secondary',
    projects: [
      {
        title: 'NYAYA.ai',
        description: 'A Next-Gen Legal Intelligence Platform. Uses RAG & Llama-3 to simplify the Indian Constitution & Bhartiya Nyaya Sanhita (BNS). Features AI Judge, Doc Drafting & Semantic Search.',
        image: 'https://private-user-images.githubusercontent.com/180370754/527693525-463acd4d-27d3-40c8-9871-1ecc07dc2ffc.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcxMDg3OTAsIm5iZiI6MTc2NzEwODQ5MCwicGF0aCI6Ii8xODAzNzA3NTQvNTI3NjkzNTI1LTQ2M2FjZDRkLTI3ZDMtNDBjOC05ODcxLTFlY2MwN2RjMmZmYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQxNTI4MTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZmM1MWU3ODAyMGIzM2MwOGY0MzhjMjAxMTYzY2E4NjAyYzg2YjEzZGE4Mjg4OTU2YzljNDQ0MDVlN2VhNDFiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.lFncUUGMWtbHULRPVOCip30axqKbtB2jbpkwzd1TxdY',
        tech: ['Python', 'Llama-3', 'RAG', 'FastAPI', 'Pinecone'],
        github: 'https://github.com/Priyanksolanki9853/NYAYA.ai',
        demo: 'https://samvidhan-ai-psi.vercel.app/',
        icon: Scale,
      },
      {
        title: 'SafeRoute AI',
        description: 'An AI-powered navigation system that analyzes road geometry, weather, and infrastructure to calculate the safest path, not just the fastest one.',
        image: 'https://private-user-images.githubusercontent.com/180370754/524854631-4f468e19-64ba-4cc9-817b-405213a8af06.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcxMDgyNTksIm5iZiI6MTc2NzEwNzk1OSwicGF0aCI6Ii8xODAzNzA3NTQvNTI0ODU0NjMxLTRmNDY4ZTE5LTY0YmEtNGNjOS04MTdiLTQwNTIxM2E4YWYwNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQxNTE5MTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lMGI3YTZkZWY2N2EwMmFkNWZkOGE3NDYzMWJlNWQyN2U1Yjg3ODhkMGU5Y2YzZjZjMmQ0MjEyN2Y2N2NkM2I3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.17giZtZx_f6oW4YHqS-OCpFcF6kCevhlNQ2sFn8kMNs',
        tech: ['Python', 'Flask', 'Computer Vision', 'NetworkX', 'OpenStreetMap'],
        github: 'https://github.com/Priyanksolanki9853/SafeRoute-AI',
        demo: 'https://accident-route-advisor.onrender.com/',
        icon: Car,
      },
    ],
  },
  websites: {
    title: 'Websites',
    subtitle: 'Web Development Projects',
    icon: Globe,
    color: 'accent',
    projects: [
      {
        title: 'Gaming Portal',
        description: 'An immersive, cyberpunk-themed game developer portfolio. Features a single-page architecture (SPA), global leaderboard powered by Supabase, embedded HTML5 arcade games, and interactive 3D UI effects.',
        image: 'https://private-user-images.githubusercontent.com/180370754/525592722-f85ba35b-740b-40a3-97cb-04d2b99da740.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcxMDg3MDMsIm5iZiI6MTc2NzEwODQwMywicGF0aCI6Ii8xODAzNzA3NTQvNTI1NTkyNzIyLWY4NWJhMzViLTc0MGItNDBhMy05N2NiLTA0ZDJiOTlkYTc0MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQxNTI2NDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02Y2Q5ZjhjNGUyNmVhZWZjZDYzZDQ4OWZkMDI2YTY2Yjc2ZDRhYzUzZGYyMTJkNWUyNmM0MzYzMjFkZDc0ZjE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Had8B-gXEEVz3RlkzJQJGgRq7SSQs4v3xwG7vn9ADzE',
        tech: ['JavaScript', 'HTML5', 'CSS3', 'Supabase'],
        github: 'https://github.com/Priyanksolanki9853/Gaming_Portal',
        demo: 'https://priyanksolanki9853.github.io/Gaming_Portal/',
        icon: Gamepad2,
      },
    ],
  },
};

type CategoryKey = keyof typeof projectCategories;

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('games');

  const categoryColors = {
    primary: {
      bg: 'bg-primary/20',
      text: 'text-primary',
      border: 'border-primary/50',
      hover: 'hover:bg-primary/30',
      glow: 'hover:shadow-[0_0_30px_hsl(180_100%_50%/0.3)]',
    },
    secondary: {
      bg: 'bg-secondary/20',
      text: 'text-secondary',
      border: 'border-secondary/50',
      hover: 'hover:bg-secondary/30',
      glow: 'hover:shadow-[0_0_30px_hsl(300_100%_60%/0.3)]',
    },
    accent: {
      bg: 'bg-accent/20',
      text: 'text-accent',
      border: 'border-accent/50',
      hover: 'hover:bg-accent/30',
      glow: 'hover:shadow-[0_0_30px_hsl(45_100%_60%/0.3)]',
    },
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Featured </span>
            <span className="gradient-text-secondary text-glow-secondary">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Games, AI applications, and web projects that showcase my skills
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {(Object.keys(projectCategories) as CategoryKey[]).map((key) => {
            const category = projectCategories[key];
            const colors = categoryColors[category.color as keyof typeof categoryColors];
            const isActive = activeCategory === key;
            const Icon = category.icon;
            
            return (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-xl font-display font-semibold
                  transition-all duration-300 border
                  ${isActive 
                    ? `${colors.bg} ${colors.text} ${colors.border} shadow-lg` 
                    : 'glass-card text-muted-foreground hover:text-foreground border-border/50'
                  }
                  ${colors.glow}
                `}
              >
                <Icon size={20} />
                <span>{category.title}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-background/30' : 'bg-muted'}`}>
                  {category.projects.length}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Category Header */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h3 className={`text-2xl font-display font-bold ${categoryColors[projectCategories[activeCategory].color as keyof typeof categoryColors].text}`}>
            {projectCategories[activeCategory].title}
          </h3>
          <p className="text-muted-foreground font-body">
            {projectCategories[activeCategory].subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={`grid-${activeCategory}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectCategories[activeCategory].projects.map((project, index) => {
            const categoryColor = projectCategories[activeCategory].color as keyof typeof categoryColors;
            const colors = categoryColors[categoryColor];
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group glass-card rounded-2xl overflow-hidden border border-border/50 ${colors.glow} transition-all duration-300`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className={`absolute top-4 right-4 p-2 glass-card rounded-lg ${colors.text}`}>
                    <Icon size={24} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-display font-bold ${colors.text} mb-2`}>
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
                      className={`flex items-center gap-2 px-4 py-2 ${colors.bg} ${colors.text} rounded-lg font-body font-semibold text-sm ${colors.hover} transition-colors`}
                    >
                      <ExternalLink size={16} />
                      {activeCategory === 'games' ? 'Play Game' : 'View Demo'}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
