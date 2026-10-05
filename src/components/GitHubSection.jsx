import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaBook, FaUsers, FaExternalLinkAlt, FaRegClock } from "react-icons/fa";

const USERNAME = "aniket1153";

const languageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  Python: "#3572A5",
  Kotlin: "#A97BFF",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  SCSS: "#c6538c",
};

const colorFor = (lang) => languageColors[lang] || "#8b949e";

const knownDescriptions = [
  [/outfit/i, "OutfitHub — MERN e-commerce with product management and Cloudinary images."],
  [/quick-?pick|blinkit/i, "QuickPick — Blinkit-style quick-commerce flow on React and Express."],
  [/complaint/i, "Complaint management system built on the MERN stack."],
  [/women|safety/i, "Android app focused on safety workflows for women."],
  [/backend/i, "Node.js and Express backend — REST APIs and data layer."],
  [/fro?n?tend/i, "React frontend — UI and API integration."],
];

function describe(repo) {
  if (repo.description) return repo.description;
  const match = knownDescriptions.find(([pattern]) => pattern.test(repo.name));
  return match ? match[1] : `${prettyName(repo.name)} · ${repo.language} source`;
}

function timeAgo(date) {
  const days = Math.floor((Date.now() - new Date(date).getTime()) / 86400000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

function prettyName(name) {
  return name.replace(/[-_]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2");
}

function GitHubSection() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed`),
        ]);
        const user = userRes.ok ? await userRes.json() : null;
        const raw = repoRes.ok ? await repoRes.json() : [];
        if (ignore) return;
        setProfile(user);
        setRepos(Array.isArray(raw) ? raw.filter((r) => !r.fork && !r.archived && r.language && r.name.toLowerCase() !== USERNAME) : []);
      } catch {
        if (!ignore) setProfile(null);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, []);

  const languages = useMemo(() => {
    const counts = {};
    repos.forEach((r) => {
      if (r.language) counts[r.language] = (counts[r.language] || 0) + 1;
    });
    const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, n]) => ({ name, pct: Math.round((n / total) * 100) }));
  }, [repos]);

  const featured = useMemo(
    () =>
      [...repos]
        .sort(
          (a, b) =>
            b.stargazers_count - a.stargazers_count ||
            Number(Boolean(b.description)) - Number(Boolean(a.description)) ||
            new Date(b.pushed_at) - new Date(a.pushed_at)
        )
        .slice(0, 6),
    [repos]
  );

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  const stats = [
    { icon: <FaBook />, value: profile?.public_repos ?? "—", label: "Repositories" },
    { icon: <FaStar />, value: totalStars, label: "Stars earned" },
    { icon: <FaUsers />, value: profile?.followers ?? "—", label: "Followers" },
    { icon: <FaCodeBranch />, value: languages.length || "—", label: "Languages" },
  ];

  return (
    <section className="scroll-mt-28 px-6 py-24 text-white" id="github">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-sm text-cyan-300">$ gh profile view {USERNAME}</p>
            <h2 className="text-3xl font-bold md:text-4xl">GitHub</h2>
            <p className="mt-3 text-gray-400">Live from the GitHub API — recent work, languages, and activity.</p>
          </div>
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]"
          >
            <FaGithub className="text-lg" /> Follow on GitHub
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-black/65 p-6 backdrop-blur"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative flex items-center gap-4">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt="" className="h-16 w-16 rounded-2xl border border-white/15 object-cover" />
              ) : (
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-3xl">
                  <FaGithub />
                </span>
              )}
              <div>
                <p className="text-lg font-semibold">{profile?.name || "Aniket Joshi"}</p>
                <p className="font-mono text-sm text-cyan-300">@{USERNAME}</p>
              </div>
            </div>

            <div className="relative mt-6 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <span className="text-sm text-cyan-300">{stat.icon}</span>
                  <p className="mt-1.5 text-2xl font-bold">{stat.value}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wide text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {languages.length > 0 && (
              <div className="relative mt-6">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-gray-400">Top languages</p>
                <div className="flex h-2.5 overflow-hidden rounded-full bg-white/10">
                  {languages.map((lang) => (
                    <motion.span
                      key={lang.name}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      style={{ backgroundColor: colorFor(lang.name) }}
                    />
                  ))}
                </div>
                <ul className="mt-3 space-y-1.5">
                  {languages.map((lang) => (
                    <li key={lang.name} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colorFor(lang.name) }} />
                      {lang.name}
                      <span className="ml-auto font-mono text-xs text-gray-500">{lang.pct}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.aside>

          <div className="min-w-0 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-black/65 backdrop-blur"
            >
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-[11px] text-gray-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                contributions · last 12 months
              </div>
              <div className="overflow-x-auto p-5">
                <img
                  src={`https://ghchart.rshah.org/22d3ee/${USERNAME}`}
                  alt={`${USERNAME} GitHub contribution graph`}
                  loading="lazy"
                  className="min-w-[680px] w-full opacity-90 [filter:invert(1)_hue-rotate(180deg)]"
                />
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {loading &&
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />
                ))}

              {!loading &&
                featured.map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group flex flex-col rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur transition hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                  >
                    <div className="flex items-center gap-2">
                      <FaBook className="shrink-0 text-gray-500" />
                      <h3 className="truncate font-mono text-sm font-semibold text-cyan-200 group-hover:text-cyan-100">{repo.name}</h3>
                      <FaExternalLinkAlt className="ml-auto shrink-0 text-[10px] text-gray-600 transition group-hover:text-cyan-300" />
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-400">
                      {describe(repo)}
                    </p>
                    {repo.topics?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span key={topic} className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-[10px] text-cyan-300">
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto flex items-center gap-4 pt-4 font-mono text-[11px] text-gray-500">
                      {repo.language && (
                        <span className="inline-flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colorFor(repo.language) }} />
                          {repo.language}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1">
                        <FaStar /> {repo.stargazers_count}
                      </span>
                      <span className="ml-auto inline-flex items-center gap-1">
                        <FaRegClock /> {timeAgo(repo.pushed_at)}
                      </span>
                    </div>
                  </motion.a>
                ))}

              {!loading && featured.length === 0 && (
                <p className="col-span-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-gray-400">
                  Couldn’t reach GitHub right now — see everything on{" "}
                  <a className="text-cyan-300 underline" href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer">
                    github.com/{USERNAME}
                  </a>
                  .
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GitHubSection;
