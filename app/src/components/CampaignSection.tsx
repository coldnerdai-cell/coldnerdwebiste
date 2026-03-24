import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, TrendingUp, Clock, Calendar, MessageCircle, User } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { count, ref };
}

function StatCard({ icon: Icon, value, label, color }: { 
  icon: React.ElementType; 
  value: number; 
  label: string;
  color: string;
}) {
  const { count, ref } = useCountUp(value);
  
  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{count}</p>
          <p className="text-xs text-gray-500">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressBar({ label, progress, delay }: { label: string; progress: number; delay: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{label}</span>
        <span className="text-violet-600 font-medium">{progress}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.4, 0, 0.2, 1] }}
          className="h-full bg-gradient-to-r from-violet-500 to-violet-600 rounded-full"
        />
      </div>
    </div>
  );
}

export function CampaignSection() {
  const tasks = [
    { label: 'Initial message', days: '2 days', icon: MessageCircle },
    { label: 'First follow up', days: '3 days', icon: Clock },
    { label: 'Second follow up', days: '5 days', icon: Calendar },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            Campaign Management
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Manage Everything from One Dashboard
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stats Column */}
          <div className="space-y-4">
            <StatCard 
              icon={Users} 
              value={900} 
              label="Active accounts" 
              color="bg-violet-100 text-violet-600"
            />
            <StatCard 
              icon={TrendingUp} 
              value={320} 
              label="Avg. Growth Rate" 
              color="bg-green-100 text-green-600"
            />
            <StatCard 
              icon={Clock} 
              value={12} 
              label="Tasks pending" 
              color="bg-amber-100 text-amber-600"
            />
            <StatCard 
              icon={Calendar} 
              value={8} 
              label="Upcoming tasks" 
              color="bg-blue-100 text-blue-600"
            />
          </div>

          {/* Targeting Card */}
          <ScrollReveal delay={0.1} className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <User className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Targeting</h4>
                <p className="text-sm text-gray-500">@johnsteve</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Followers</p>
              <p className="text-3xl font-bold text-gray-900">24.5K</p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-700">Follow-up Sequence</p>
              {tasks.map((task, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <task.icon className="w-4 h-4 text-violet-600" />
                    </div>
                    <span className="text-sm text-gray-700">{task.label}</span>
                  </div>
                  <span className="text-sm text-violet-600 font-medium">{task.days}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Performance Card */}
          <ScrollReveal delay={0.2} className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-6">Last 30 days</h4>
            
            <div className="space-y-6">
              <ProgressBar label="Message Delivery Rate" progress={94} delay={0.1} />
              <ProgressBar label="Response Rate" progress={68} delay={0.2} />
              <ProgressBar label="Follower Conversion" progress={42} delay={0.3} />
              <ProgressBar label="Engagement Rate" progress={78} delay={0.4} />
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-violet-600">1,247</p>
                  <p className="text-xs text-gray-500">Messages Sent</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">847</p>
                  <p className="text-xs text-gray-500">Replies Received</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
