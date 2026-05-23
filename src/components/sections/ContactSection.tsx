'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Mail, Phone, Github, Linkedin, Twitter, Send, MapPin, Code2 } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { PERSONAL_INFO } from '@/data';
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp } from '@/animations/variants';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(4, 'Subject must be at least 4 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    color: 'text-purple-400',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone}`,
    color: 'text-blue-400',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: '#',
    color: 'text-green-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Gana-Y',
    href: PERSONAL_INFO.github,
    color: 'text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Ganesh Yandigeri',
    href: PERSONAL_INFO.linkedin,
    color: 'text-blue-500',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    value: '@Ganesh821060',
    href: PERSONAL_INFO.twitter,
    color: 'text-sky-400',
  },
  {
    icon: Code2,
    label: 'LeetCode',
    value: 'Ganesh_Op',
    href: 'https://leetcode.com/u/Ganesh_Op/',
    color: 'text-orange-400',
  },
];

export default function ContactSection() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to send');
      toast.success('Message sent! I\'ll get back to you soon.', { duration: 5000 });
      reset();
    } catch {
      toast.error('Failed to send. Please email me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="section-padding">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Together"
          description="Open to collaborations, opportunities, and interesting conversations about AI."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT — Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <motion.p variants={fadeInLeft} className="text-text-secondary text-lg leading-relaxed">
              Whether you have an exciting AI project, a job opportunity, or just want to talk about where the field is heading — my inbox is open.
            </motion.p>

            <motion.div variants={fadeInLeft} className="space-y-3">
              {CONTACT_ITEMS.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass-card border border-neon-purple/15 hover:border-neon-purple/35 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <div className={`w-10 h-10 rounded-xl bg-black/30 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-text-muted">{item.label}</div>
                    <div className="text-sm font-medium text-text-primary group-hover:text-neon-bright transition-colors">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card rounded-2xl p-8 border border-neon-purple/20 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1.5">
                    Name
                  </label>
                  <input
                    {...register('name')}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder-text-ghost text-sm input-glow transition-all focus:border-neon-purple/50"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1.5">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder-text-ghost text-sm input-glow transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-text-muted mb-1.5">
                  Subject
                </label>
                <input
                  {...register('subject')}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder-text-ghost text-sm input-glow transition-all"
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono text-text-muted mb-1.5">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Tell me what you're working on..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder-text-ghost text-sm input-glow transition-all resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl btn-primary font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!sending ? { scale: 1.02 } : {}}
                whileTap={!sending ? { scale: 0.98 } : {}}
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
