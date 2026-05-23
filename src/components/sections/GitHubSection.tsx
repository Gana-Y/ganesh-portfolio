'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Code2, ExternalLink, BookOpen } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { staggerContainer, fadeInUp } from '@/animations/variants';

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
}

interface Repo {
  stargazers_count: number;
  language: string | null;
  name: string;
  description: string;
  html_url: string;
  fork: boolean;
}

export default function GitHubSection() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [totalStars, setTotalStars] = useState(0);
  const [languages, setLanguages] = useState<{ name: string; percent: number; color: string }[]>([]);
  const [loading, setLoading] = useState(true);

  const LANG_COLORS: Record<string, string> = {
    Python: '#3776AB',
    'C++': '#00599C',
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    HTML: '#E34F26',
    CSS: '#1572B6',
    Shell: '#89E051',
    Jupyter: '#DA5B0B',
    Other: '#6b7280',
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch user profile
        const userRes = await fetch('https://api.github.com/users/Gana-Y');
        const userData: GitHubStats = await userRes.json();
        setStats(userData);

        // Fetch repos
        const reposRes = await fetch('https://api.github.com/users/Gana-Y/repos?per_page=100');
        const repos: Repo[] = await reposRes.json();

        // Calculate total stars
        const stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        setTotalStars(stars);

        // Calculate language breakdown
        const langCount: Record<string, number> = {};
        repos.forEach((repo) => {
          if (!repo.fork && repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          }
        });

        const total = Object.values(langCount).reduce((a, b) => a + b, 0);
        const sorted = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            percent: Math.round((count / total) * 100),
            color: LANG_COLORS[name] || LANG_COLORS.Other,
          }));

        setLanguages(sorted);
      } catch (err) {
        console.error('GitHub API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const GITHUB_STATS = [
    {
      label: 'Repositories',
      value: loading ? '...' : `${stats?.public_repos ?? 0}`,
      icon: BookOpen,
      color: 'text-purple-400',
    },
    {
      label: 'Stars Earned',
      value: loading ? '...' : `${totalStars}`,
      icon: Star,
      color: 'text-yellow-400',
    },
    {
      label: 'Followers',
      value: loading ? '...' : `${stats?.followers ?? 0}`,
      icon: GitFork,
      color: 'text-green-400',
    },
    {
      label: 'Following',
      value: loading ? '...' : `${stats?.following ?? 0}`,
      icon: Code2,
      color: 'text-blue-400',
    },
  ];

  return (
    <SectionWrapper id="github" className="section-padding">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Open Source"
          title="GitHub Activity"
          description="Code doesn't lie. Here's what I've been building and shipping."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          {/* Live stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GITHUB_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="glass-card rounded-2xl p-6 text-center border border-neon-purple/20 hover:border-neon-purple/40 transition-all group"
              >
                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <div className="text-3xl font-display font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-text-muted text-xs font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Language breakdown */}
          <motion.div
            variants={fadeInUp}
            className="glass-card rounded-2xl p-8 border border-neon-purple/20"
          >
            <h3 className="font-display font-semibold text-text-primary mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-neon-bright" />
              Top Languages
              {!loading && (
                <span className="text-xs font-mono text-text-ghost ml-2">(from your repos)</span>
              )}
            </h3>

            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 bg-white/5 rounded-lg animate-pulse" />
                ))}
              </div>
            ) : languages.length > 0 ? (
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-mono text-text-secondary">{lang.name}</span>
                      <span className="text-sm font-mono text-neon-bright">{lang.percent}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, #7c3aed, ${lang.color})`,
                          boxShadow: `0 0 8px ${lang.color}60`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-text-muted text-sm font-mono">
                No repos found yet — start pushing code! 🚀
              </p>
            )}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <motion.a
              href="https://github.com/Gana-Y"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-xl glass-card border border-neon-purple/30 hover:border-neon-purple/60 hover:shadow-neon-md transition-all font-medium group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github className="w-5 h-5 text-neon-bright" />
              <span className="text-text-primary group-hover:text-neon-bright transition-colors">
                View All Repositories on GitHub
              </span>
              <ExternalLink className="w-4 h-4 text-text-muted" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}