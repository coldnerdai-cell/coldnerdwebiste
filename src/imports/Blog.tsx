import { Link } from "react-router";
import { motion } from "motion/react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../app/components/ScrollReveal";
const imgWhatsAppImage20260226At124548AmRemovebgPreview1 = "/logo.png";

const blogPosts = [
  {
    id: 1,
    title: "How to Safely Automate Your Instagram DMs in 2025",
    excerpt:
      "Learn the best practices for automating your Instagram direct messages while keeping your account safe and avoiding bans.",
    date: "Jan 15, 2025",
    category: "Automation",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Complete Guide to Instagram Account Warmup",
    excerpt:
      "Why warming up your Instagram account matters and how to do it properly before running any automation campaigns.",
    date: "Jan 22, 2025",
    category: "Safety",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Boost Your Response Rate with Smart Follow-Ups",
    excerpt:
      "Discover how timed follow-up sequences can dramatically improve your Instagram outreach response rates.",
    date: "Feb 3, 2025",
    category: "Growth",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Instagram Outreach Mistakes You're Probably Making",
    excerpt:
      "Common pitfalls that reduce your outreach effectiveness and how ColdNerd helps you avoid them.",
    date: "Feb 14, 2025",
    category: "Tips",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Scaling Your DM Strategy: From 100 to 10,000 Conversations",
    excerpt:
      "A step-by-step framework for scaling your Instagram DM campaigns without sacrificing personalization.",
    date: "Feb 28, 2025",
    category: "Growth",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Understanding Instagram's Algorithm in 2025",
    excerpt:
      "How Instagram's latest algorithm changes affect automated outreach and what you can do to stay ahead.",
    date: "Mar 10, 2025",
    category: "Strategy",
    readTime: "5 min read",
  },
];

const categoryColors: Record<string, string> = {
  Automation: "bg-blue-100 text-blue-700",
  Safety: "bg-green-100 text-green-700",
  Growth: "bg-purple-100 text-purple-700",
  Tips: "bg-amber-100 text-amber-700",
  Strategy: "bg-rose-100 text-rose-700",
};

function BlogNavbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between w-[95%] max-w-[1200px] px-4 sm:px-6 lg:px-8 py-3 rounded-full bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40">
      {/* Logo */}
      <Link to="/" className="h-[50px] w-[160px] lg:w-[200px] relative shrink-0 flex items-center">
        <img
          alt="ColdNerd Logo"
          className="h-full w-auto object-contain pointer-events-none"
          src={imgWhatsAppImage20260226At124548AmRemovebgPreview1}
        />
      </Link>

      {/* Center */}
      <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#0d0d0d] text-[20px]">
          Blog
        </span>
      </div>

      {/* Right */}
      <div className="hidden md:flex gap-[8px] items-center shrink-0">
        <Link
          to="/"
          className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#2a6ff3] text-[15px] leading-[30px] hover:opacity-80 transition-opacity no-underline"
        >
          &larr; Back to Home
        </Link>
      </div>

      {/* Mobile */}
      <Link
        to="/"
        className="md:hidden font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#2a6ff3] text-[14px] no-underline"
      >
        &larr; Home
      </Link>
    </nav>
  );
}

function BlogCard({ post, index }: { post: (typeof blogPosts)[0]; index: number }) {
  return (
    <StaggerItem>
      <motion.article
        whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer h-full flex flex-col"
      >
        {/* Color bar */}
        <div className="h-2 bg-gradient-to-r from-[#2a6ff3] to-[#6c9dff]" />

        <div className="p-6 sm:p-8 flex flex-col flex-1">
          {/* Category + Date */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                categoryColors[post.category] || "bg-gray-100 text-gray-700"
              }`}
            >
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.date}</span>
          </div>

          {/* Title */}
          <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[#0d0d0d] text-lg sm:text-xl leading-tight mb-3">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="font-['Inter:Regular',sans-serif] text-[#757575] text-sm sm:text-base leading-relaxed flex-1">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
            <span className="text-gray-400 text-sm">{post.readTime}</span>
            <span className="text-[#2a6ff3] font-semibold text-sm hover:underline">
              Read More &rarr;
            </span>
          </div>
        </div>
      </motion.article>
    </StaggerItem>
  );
}

export default function Blog() {
  return (
    <div className="bg-[#f8fbff] min-h-screen w-full overflow-x-hidden">
      <BlogNavbar />

      {/* Hero */}
      <div className="pt-32 pb-16 px-4 sm:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal variant="fadeUp">
            <p className="text-[#2a6ff3] font-['Inter:Semi_Bold',sans-serif] font-semibold text-sm uppercase tracking-widest mb-4">
              ColdNerd Blog
            </p>
            <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[#0d0d0d] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Insights & Strategies for
              <br />
              Instagram Growth
            </h1>
            <p className="font-['Inter:Regular',sans-serif] text-[#5e5e5e] text-base sm:text-lg lg:text-xl max-w-[600px] mx-auto leading-relaxed">
              Tips, guides, and best practices to help you automate smarter and grow faster.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="px-4 sm:px-8 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            staggerDelay={0.12}
          >
            {blogPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
