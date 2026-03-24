import { motion } from 'framer-motion';
import { Rocket, PenTool, Zap } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Generate Leads on Autopilot',
    description: 'Automate campaigns and track results in real time. Our AI identifies your ideal audience and engages with them automatically.',
    icon: Rocket,
    color: 'bg-violet-100 text-violet-600',
  },
  {
    number: '02',
    title: 'Write Your Outreach Sequence',
    description: 'Write DMs and schedule follow-ups effortlessly. Create personalized message templates that feel authentic and human.',
    icon: PenTool,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    number: '03',
    title: 'Watch Your Growth Explode',
    description: 'Sit back and watch as your follower count grows, engagement increases, and your brand reaches new heights.',
    icon: Zap,
    color: 'bg-amber-100 text-amber-600',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            3 Simple Steps to Instagram Growth
          </h2>
          <p className="text-lg text-gray-600">
            Launch and automate your Instagram outreach in just three simple steps
          </p>
        </ScrollReveal>

        {/* Steps */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-violet-200 via-violet-300 to-violet-200" />
          
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative text-center"
              >
                {/* Step Number Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2,
                    type: 'spring',
                    stiffness: 200
                  }}
                  className={`w-20 h-20 mx-auto rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <step.icon className="w-8 h-8" />
                </motion.div>

                {/* Step Number Badge */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
