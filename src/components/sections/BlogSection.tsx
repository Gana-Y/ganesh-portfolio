'use client';

import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight, BookOpen } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { BLOG_POSTS } from '@/data';
import { staggerContainer, fadeInUp } from '@/animations/variants';
import { formatDate } from '@/lib/utils';

const CATEGORY_COLORS: Record<string, string> = {
  LLMs: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
  'Deep Learning': 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  'Healthcare AI': 'text-green-400 bg-green-400/10 border-green-400/30',
  default: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
};

export default function BlogSection() {
  return (
    <SectionWrapper id="blog" className="section-padding">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Thoughts & Writing"
          title="AI Blog"
          description="Sharing what I learn — from LLM internals to production AI patterns."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {BLOG_POSTS.map((post, i) => {
            const catColor = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.default;
            return (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="glass-card rounded-2xl overflow-hidden border border-neon-purple/20 hover:border-neon-purple/40 transition-all group hover:shadow-neon-sm cursor-pointer"
                whileHover={{ y: -6 }}
                onClick={() => window.open((post as any).url, '_blank')}
              >
                {/* Card header gradient */}
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/25 via-electric-blue/15 to-transparent" />
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  {/* Post number */}
                  <div className="absolute top-4 left-4 font-mono text-6xl font-bold text-white/5 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <BookOpen className="w-8 h-8 text-neon-purple/40" />
                  </div>
                </div>

                <div className="p-6">
                  {/* Category + read time */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${catColor}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-text-ghost text-xs font-mono">
                      <Clock className="w-3 h-3" />
                      {post.readTime} read
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-text-primary mb-2 leading-snug group-hover:text-neon-bright transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-xs font-mono text-text-ghost">
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Date + Read link */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-text-ghost">
                      {formatDate(post.date)}
                    </span>
                    <motion.span
                      className="flex items-center gap-1 text-xs font-mono text-neon-bright opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 2 }}
                    >
                      Read more <ArrowRight className="w-3 h-3" />
                    </motion.span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Coming soon notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-neon-purple/20 text-sm text-text-muted font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-bright animate-pulse" />
            Full blog coming soon — articles in progress
          </span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
