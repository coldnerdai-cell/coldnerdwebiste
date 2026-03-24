import { motion } from 'framer-motion';
import { X, Check, Target, BarChart3 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const problems = [
  'Time-consuming manual outreach',
  'Inconsistent messaging',
  'Hard to scale operations',
];

const solutions = [
  { text: 'Automate personalized DMs with smart follow-ups', icon: Target },
  { text: 'Identify ideal prospects from followers, likers, and hashtags', icon: Target },
  { text: 'Monitor campaign activity and response rates instantly', icon: BarChart3 },
];

export function ProblemSolutionSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Card */}
          <ScrollReveal direction="left">
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-red-100 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Problem</h3>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Manual Instagram outreach is time-consuming, inconsistent, and hard to scale
              </p>

              <StaggerContainer className="space-y-4">
                {problems.map((problem, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                      <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-red-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{problem}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>

          {/* Solution Card */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-green-100 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Solution</h3>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Orbitask automates your entire outreach workflow while maintaining a human touch
              </p>

              <StaggerContainer className="space-y-4">
                {solutions.map((solution, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-4 bg-green-50 rounded-xl"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{solution.text}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
