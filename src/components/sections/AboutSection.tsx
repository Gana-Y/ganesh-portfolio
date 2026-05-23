'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Brain, TrendingUp, Code2, Rocket, Users } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp } from '@/animations/variants';

const ABOUT_CARDS = [
  {
    icon: Brain,
    title: 'AI-First Mindset',
    description: 'Every problem I look at, I see through the lens of what intelligent systems can solve. Machine learning is not a tool — it\'s a new way of thinking.',
    color: 'from-purple-600/20 to-violet-600/10',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Heart,
    title: 'Healthcare AI Passion',
    description: 'Healthcare is where AI creates the most human impact. Building models that help diagnose earlier, predict risks, and improve outcomes drives me forward.',
    color: 'from-rose-600/15 to-pink-600/10',
    border: 'border-rose-500/30',
    iconColor: 'text-rose-400',
  },
  {
    icon: TrendingUp,
    title: 'FinTech Intelligence',
    description: 'Finance moves at machine speed. I build AI systems that parse earnings, detect patterns, and surface insights from the noise of global markets.',
    color: 'from-green-600/15 to-emerald-600/10',
    border: 'border-green-500/30',
    iconColor: 'text-green-400',
  },
  {
    icon: Code2,
    title: 'Builder by Nature',
    description: 'I learn by building. Every project starts with a problem, a blank file, and a week of reading docs. That journey from confused to working is where I thrive.',
    color: 'from-blue-600/15 to-cyan-600/10',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: Rocket,
    title: 'Figuring it Out',
    description: 'Currently deep in LLMs, RAG pipelines, and building production-quality AI systems. Not waiting to be ready — just shipping, breaking things, and iterating.',
    color: 'from-orange-600/15 to-amber-600/10',
    border: 'border-orange-500/30',
    iconColor: 'text-orange-400',
  },
  {
    icon: Users,
    title: 'Let\'s Connect',
    description: 'I believe the best AI products are born from collaboration. If you\'re working on something at the intersection of AI and real-world problems, I want to hear from you.',
    color: 'from-cyan-600/15 to-teal-600/10',
    border: 'border-cyan-500/30',
    iconColor: 'text-cyan-400',
  },
];

const STATS = [
  { label: 'Projects Built', value: '3+' },
  { label: 'GitHub Repos', value: '5+' },
  { label: 'AI Models Trained', value: '3+' },
  { label: 'Lines of Python', value: '35K+' },
];

export default function AboutSection() {
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <SectionWrapper id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="The Engineer Behind the Code"
          description="Turning curiosity into systems. Building AI that matters in healthcare and finance."
        />

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — Profile + Story */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {/* Profile card */}
            <div className="flex items-center gap-5 glass-card rounded-2xl p-5 border border-neon-purple/20">
              {/* Photo with glowing ring */}
              <div className="relative flex-shrink-0">
                {/* Spinning gradient ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-[3px] rounded-full z-0"
                  style={{
                    background: 'conic-gradient(from 0deg, #7c3aed, #3b82f6, #06b6d4, #a78bfa, #7c3aed)',
                    borderRadius: '50%',
                  }}
                />
                {/* Photo container */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden z-10 border-2 border-abyss">
                  <img
                    src="/images/profile.png"
                    alt="Ganesh Y"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Fallback initials shown always underneath */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neon-purple to-electric-blue text-white font-display font-bold text-2xl -z-10">
                    GY
                  </div>
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-green-400 border-2 border-abyss z-20 animate-pulse" />
              </div>

              {/* Name + title */}
              <div>
                <h3 className="font-display font-bold text-text-primary text-xl">Ganesh Y</h3>
                <p className="text-neon-bright text-sm font-mono mt-0.5">AI Engineer</p>
                <p className="text-text-ghost text-xs font-mono mt-1">📍 India</p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-green-400">Open to opportunities</span>
                </div>
              </div>
            </div>

            {/* Gradient divider */}
            <div
              className="w-full h-px"
              style={{ background: 'linear-gradient(90deg, #7c3aed, #3b82f6, transparent)' }}
            />

            <p className="text-text-secondary text-lg leading-relaxed">
              I&apos;m <span className="text-neon-bright font-semibold">Ganesh</span>, an aspiring AI engineer who believes we are at the most exciting moment in the history of computing. LLMs, diffusion models, agents — this isn&apos;t hype. This is a genuine platform shift.
            </p>

            <p className="text-text-muted leading-relaxed">
              My focus is on two sectors where AI creates the most undeniable value:{' '}
              <span className="text-neon-electric">healthcare</span> and{' '}
              <span className="text-neon-electric">finance</span>. One saves lives. The other shapes how resources flow. Both are being fundamentally reimagined by intelligent systems.
            </p>

            <p className="text-text-muted leading-relaxed">
              Right now I&apos;m deep in building — LangChain pipelines, fine-tuned models, FastAPI backends, and end-to-end AI products. I don&apos;t wait to feel ready. I ship, break things, read the error, and improve.
            </p>

            {/* Quote */}
            <div className="relative pl-6 py-4">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-purple to-electric-blue rounded-full" />
              <p className="text-text-secondary italic text-base">
                &ldquo;The best way to understand AI is to build AI. Everything else is theory.&rdquo;
              </p>
              <p className="text-text-muted text-sm mt-2">— My engineering philosophy</p>
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 text-neon-bright hover:text-neon-electric transition-colors font-medium group"
              whileHover={{ x: 4 }}
            >
              Let&apos;s build something together
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            ref={statsRef}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card rounded-2xl p-6 text-center border border-neon-purple/20 hover:border-neon-purple/40 transition-all group"
              >
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm font-mono">{stat.label}</div>
              </motion.div>
            ))}

            {/* Current focus */}
            <div className="col-span-2 glass-card rounded-2xl p-6 border border-neon-purple/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Currently Learning</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Agentic AI', 'RAG Pipelines', 'Model Fine-tuning', 'MLOps', 'Vector Databases'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-neon-purple/10 border border-neon-purple/25 text-neon-electric"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {ABOUT_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              custom={i}
              className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${card.color} border ${card.border} hover:scale-[1.02] hover:shadow-neon-sm transition-all duration-300 group`}
            >
              <div className={`w-10 h-10 rounded-xl bg-black/30 flex items-center justify-center mb-4 ${card.iconColor} group-hover:scale-110 transition-transform`}>
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-text-primary mb-2 text-lg">
                {card.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}