'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Mail, Phone, Github, Linkedin, Twitter, Send, MapPin, Radio, Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data';
import SpotlightTiltCard from '@/components/ui/SpotlightTiltCard';
import BorderBeam from '@/components/ui/BorderBeam';
import MagneticButton from '@/components/ui/MagneticButton';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid frequency (email)'),
  subject: z.string().min(4, 'Subject must be at least 4 characters'),
  message: z.string().min(15, 'Message payload must be at least 15 characters'),
});

type FormData = z.infer<typeof schema>;

const CHANNELS = [
  {
    icon: Mail,
    label: 'PRIMARY FREQUENCY',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    icon: Linkedin,
    label: 'NEURAL LINKEDIN',
    value: 'Ganesh Yandigeri',
    href: PERSONAL_INFO.linkedin,
  },
  {
    icon: Github,
    label: 'CODEBASE REPO',
    value: 'github.com/Gana-Y',
    href: PERSONAL_INFO.github,
  },
  {
    icon: MapPin,
    label: 'COORDINATES',
    value: 'Bangalore, India · 12.9716° N',
    href: '#',
  },
];

export default function SpaceContact() {
  const [transmitting, setTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setTransmitting(true);
    try {
      // Create mailto fallback or simulated transmission
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[COMM_LINK] ${data.subject}`
      )}&body=${encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`)}`;
      
      window.open(mailtoUrl, '_blank');
      setTransmitted(true);
      toast.success('Transmission dispatched to primary receiver!');
      reset();
    } catch {
      toast.error('Transmission disrupted. Check connection.');
    } finally {
      setTransmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 sm:py-32 overflow-hidden bg-void">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] rounded-full bg-stellar-cyan/5 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cosmic-pill mb-4 text-xs font-mono text-stellar-cyan">
            <Radio className="w-3.5 h-3.5 text-stellar-cyan animate-pulse" />
            <span>SECTOR_06 // TRANSMISSION CONSOLE</span>
          </div>

          <h2 className="font-cinematic text-3xl sm:text-5xl font-extrabold tracking-tight text-starlight leading-tight">
            INITIATE COMM LINK &amp; <br />
            <span className="shimmer-text">COLLABORATION</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-stardust mt-4 tracking-wide max-w-xl mx-auto">
            Open for full-time engineering roles, high-throughput backend architecture, and AI systems research.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Channel Matrix */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl cosmic-hud border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-stellar-cyan tracking-wider uppercase mb-2">
                <Terminal className="w-4 h-4" />
                <span>ACTIVE COMMS MATRIX</span>
              </div>
              <p className="text-xs text-stardust leading-relaxed">
                Direct transmissions reach my primary terminal in Bangalore. Whether you have an engineering mission or would like to discuss low-latency architecture, signal channels are open.
              </p>
            </div>

            <div className="space-y-3">
              {CHANNELS.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="block"
                >
                  <SpotlightTiltCard
                    tiltIntensity={5}
                    spotlightColor="rgba(0, 212, 255, 0.15)"
                    showCrosshairs={false}
                    className="flex flex-row items-center gap-4 p-4 rounded-xl cosmic-hud border border-white/10 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-stellar-cyan/10 border border-stellar-cyan/30 flex items-center justify-center text-stellar-cyan group-hover:scale-110 transition-transform shrink-0">
                      <ch.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-stardust uppercase tracking-wider">
                        {ch.label}
                      </div>
                      <div className="text-xs sm:text-sm font-mono text-starlight group-hover:text-stellar-cyan transition-colors">
                        {ch.value}
                      </div>
                    </div>
                  </SpotlightTiltCard>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Transmission Input Console */}
          <div className="lg:col-span-7 relative">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="cosmic-hud p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 space-y-5 shadow-2xl relative overflow-hidden group"
            >
              {/* Luminous Starlight Border Beam */}
              <BorderBeam duration={12} colorFrom="#00d4ff" colorTo="#38bdf8" />

              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-mono tracking-widest text-stellar-cyan uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  TERMINAL_INPUT :: DISPATCH READY
                </span>
                <span className="text-[10px] font-mono text-stardust">ENCRYPTED_256</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-stardust mb-1 uppercase tracking-wider">
                    OPERATOR_NAME
                  </label>
                  <input
                    {...register('name')}
                    placeholder="Your name or organization"
                    className="w-full px-4 py-3 rounded-xl bg-void/80 border border-white/10 text-starlight placeholder-stardust/40 text-xs font-mono focus:border-stellar-cyan focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="text-rose-400 text-[10px] font-mono mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-stardust mb-1 uppercase tracking-wider">
                    RETURN_FREQUENCY (EMAIL)
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-void/80 border border-white/10 text-starlight placeholder-stardust/40 text-xs font-mono focus:border-stellar-cyan focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="text-rose-400 text-[10px] font-mono mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-stardust mb-1 uppercase tracking-wider">
                  MISSION_SUBJECT
                </label>
                <input
                  {...register('subject')}
                  placeholder="e.g. Engineering Opportunity / Collab / OrderCore Specs"
                  className="w-full px-4 py-3 rounded-xl bg-void/80 border border-white/10 text-starlight placeholder-stardust/40 text-xs font-mono focus:border-stellar-cyan focus:outline-none transition-colors"
                />
                {errors.subject && (
                  <p className="text-rose-400 text-[10px] font-mono mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-[11px] font-mono text-stardust mb-1 uppercase tracking-wider">
                  TRANSMISSION_PAYLOAD
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Enter message specifications..."
                  className="w-full px-4 py-3 rounded-xl bg-void/80 border border-white/10 text-starlight placeholder-stardust/40 text-xs font-mono focus:border-stellar-cyan focus:outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-rose-400 text-[10px] font-mono mt-1">{errors.message.message}</p>
                )}
              </div>

              <MagneticButton
                type="submit"
                strength={0.15}
                disabled={transmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-stellar-cyan text-void text-xs font-mono font-bold tracking-wider hover:bg-stellar-glow transition-all shadow-stellar-sm disabled:opacity-50"
              >
                {transmitting ? (
                  <span>DISPATCHING TRANSMISSION...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-void" />
                    <span>DISPATCH TRANSMISSION</span>
                  </>
                )}
              </MagneticButton>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
