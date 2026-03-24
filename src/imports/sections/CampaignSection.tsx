import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { MessageSquare, Target, BarChart3, ArrowUpRight, Users, Eye, MousePointerClick, TrendingUp } from "lucide-react";

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return { count, ref };
}

function ProgressBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">{label}</span>
        <span className="font-semibold text-gray-900">{value}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}

export function CampaignSection() {
  const followers = useCountUp(12400, 2000);
  const engagement = useCountUp(47, 2000);
  const reach = useCountUp(89, 2000);
  const newLeads = useCountUp(324, 2000);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2a6ff3] text-sm font-medium mb-4">
            Campaign Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Manage Everything from One Dashboard
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Launch, track, and optimize every campaign from a single powerful dashboard
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {[
              { icon: Users, label: "Followers Gained", ref: followers.ref, value: followers.count.toLocaleString(), sub: "+18% this month", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Eye, label: "Engagement Rate", ref: engagement.ref, value: `${engagement.count}%`, sub: "+5.2% vs last week", color: "text-emerald-500", bg: "bg-emerald-50" },
              { icon: MousePointerClick, label: "Profile Reach", ref: reach.ref, value: `${reach.count}K`, sub: "+32% this month", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: TrendingUp, label: "New Leads", ref: newLeads.ref, value: newLeads.count.toString(), sub: "+12% this week", color: "text-amber-500", bg: "bg-amber-50" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-md transition-all flex items-center gap-4"
              >
                <div ref={stat.ref} className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <p className="text-xs text-green-600 font-medium whitespace-nowrap">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Targeting Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-[#2a6ff3]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Smart Targeting</h3>
                <p className="text-xs text-gray-500">Auto-optimized audience</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm font-medium text-gray-900 mb-1">Active Sequences</p>
                <div className="space-y-3">
                  {["Welcome Series", "Re-engagement", "Lead Nurture"].map((seq, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-green-500" : i === 1 ? "bg-blue-500" : "bg-amber-500"}`} />
                        <span className="text-sm text-gray-600">{seq}</span>
                      </div>
                      <span className="text-xs text-gray-400">{["24/7", "Mon-Fri", "Weekends"][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700">Audience Segments</p>
              <div className="flex flex-wrap gap-2">
                {["Fitness", "E-commerce", "SaaS", "Coaches", "Creators"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-50 hover:text-[#2a6ff3] transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Performance Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#2a6ff3]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Performance</h3>
                  <p className="text-xs text-gray-500">Last 30 days</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-green-500" />
            </div>

            <div className="space-y-5 mb-6">
              <ProgressBar label="DM Delivery Rate" value={98} color="bg-[#2a6ff3]" />
              <ProgressBar label="Open Rate" value={76} color="bg-emerald-500" />
              <ProgressBar label="Response Rate" value={42} color="bg-amber-500" />
              <ProgressBar label="Conversion Rate" value={18} color="bg-purple-500" />
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Campaign Health</span>
                <span className="text-xs font-semibold text-green-600">Excellent</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Active", value: "12" },
                  { label: "Paused", value: "3" },
                  { label: "Completed", value: "28" },
                  { label: "Drafts", value: "5" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-2 bg-white rounded-lg">
                    <p className="text-lg font-bold text-gray-900">{item.value}</p>
                    <p className="text-xs text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
