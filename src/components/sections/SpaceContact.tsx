'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '@/data';

const schema = z.object({
  name: z.string().min(2, 'Enter at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  subject: z.string().min(4, 'Enter a short subject'),
  message: z.string().min(15, 'Message should be at least 15 characters'),
});

type FormData = z.infer<typeof schema>;

const CHANNELS = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ganesh-yandigeri',
    href: PERSONAL_INFO.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Gana-Y',
    href: PERSONAL_INFO.github,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: PERSONAL_INFO.location,
    href: null,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SpaceContact() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      const mailtoUrl = `mailto:${encodeURIComponent(PERSONAL_INFO.email)}?subject=${encodeURIComponent(
        data.subject
      )}&body=${encodeURIComponent(
        `Hi Ganesh,\n\n${data.message}\n\nFrom: ${data.name} (${data.email})`
      )}`;

      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success('Email draft opened in your default email client.');
      reset();
    } catch {
      toast.error('Could not open email client. Please email directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-canvas border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.38, ease: EASE }}
            className="lg:col-span-5"
          >
            <p className="font-mono text-xs text-sky-400 tracking-[0.02em] mb-3 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-[-0.02em] leading-[1.15] text-primary">
              Let&apos;s build together
            </h2>
            <p className="text-sm text-secondary mt-4 leading-relaxed max-w-md">
              Available for full-time engineering roles, high-throughput systems design, and production RAG pipeline architecture.
            </p>

            <div className="space-y-3 mt-8">
              {CHANNELS.map((item) => {
                const Content = (
                  <div className="p-4 rounded-xl bg-surface border border-hairline hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:bg-surface/90 transition-all duration-150 flex items-center gap-3.5 group">
                    <div className="w-9 h-9 rounded-lg bg-raised border border-hairline group-hover:border-sky-500/50 group-hover:text-sky-400 flex items-center justify-center text-muted shrink-0 transition-colors">
                      <item.icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted">{item.label}</div>
                      <div className="text-sm font-medium text-primary group-hover:text-sky-300 truncate transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {Content}
                  </a>
                ) : (
                  <div key={item.label}>{Content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Functional contact form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-hairline hover:border-sky-500/30 transition-colors space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-secondary mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    {...register('name')}
                    placeholder="Your name"
                    className="w-full h-10 px-3 rounded-lg bg-deep border border-hairline text-sm text-primary placeholder:text-muted focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:shadow-[0_0_15px_rgba(56,189,248,0.25)] focus:outline-none transition-all duration-150"
                  />
                  {errors.name && (
                    <p className="text-danger text-xs mt-1.5">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-secondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    {...register('email')}
                    type="email"
                    placeholder="you@company.com"
                    className="w-full h-10 px-3 rounded-lg bg-deep border border-hairline text-sm text-primary placeholder:text-muted focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:shadow-[0_0_15px_rgba(56,189,248,0.25)] focus:outline-none transition-all duration-150"
                  />
                  {errors.email && (
                    <p className="text-danger text-xs mt-1.5">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-secondary mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  {...register('subject')}
                  placeholder="Role inquiry, collaboration, or project question"
                  className="w-full h-10 px-3 rounded-lg bg-deep border border-hairline text-sm text-primary placeholder:text-muted focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:shadow-[0_0_15px_rgba(56,189,248,0.25)] focus:outline-none transition-all duration-150"
                />
                {errors.subject && (
                  <p className="text-danger text-xs mt-1.5">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-secondary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  {...register('message')}
                  rows={4}
                  placeholder="Write your message"
                  className="w-full p-3 rounded-lg bg-deep border border-hairline text-sm text-primary placeholder:text-muted focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:shadow-[0_0_15px_rgba(56,189,248,0.25)] focus:outline-none transition-all duration-150 resize-none"
                />
                {errors.message && (
                  <p className="text-danger text-xs mt-1.5">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full h-11 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-medium inline-flex items-center justify-center gap-2 border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:from-sky-400 hover:to-blue-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.65)] active:scale-[0.98] transition-all duration-150 ease-unslop disabled:opacity-50"
              >
                <Send className="w-4 h-4" strokeWidth={1.5} />
                <span>{sending ? 'Opening email client' : 'Send message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
