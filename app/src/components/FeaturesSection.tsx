import { motion } from 'framer-motion';
import { MessageSquare, Clock, Shield } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const features = [
  {
    icon: MessageSquare,
    title: 'Smart DM Automation',
    description: 'Send personalized DMs automatically with smart reply handling',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    icon: Clock,
    title: 'Automated Follow-Up',
    description: 'Schedule timed message sequences to boost responses',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Shield,
    title: 'Safe Account Warmup',
    description: 'Mimic human behavior with built-in safety controls',
    color: 'bg-green-100 text-green-600',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            Main Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Powerful Automation Features Designed for{' '}
            <span className="text-violet-600">Safe and Scalable</span> Instagram Growth
          </h2>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl hover:border-violet-200 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-violet-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Learn more</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
