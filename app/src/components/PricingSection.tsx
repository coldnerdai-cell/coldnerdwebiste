import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const plans = [
  {
    name: 'Basic',
    description: 'Starter plan for personal accounts. Automate limited DMs and follow-ups safely.',
    monthlyPrice: 9,
    yearlyPrice: 7,
    features: [
      '500 DMs per day',
      'Auto warmup',
      'Humanize voice notes',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For growing accounts. Full DM automation, follow-ups, and account warmup features.',
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      '5,000 DMs per day',
      'Auto warmup',
      'Humanize voice notes',
      'Advanced analytics',
      'Priority support',
      'A/B testing',
      'Custom templates',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Ultimate',
    description: 'Complete multi-account growth & analytics for agencies and teams.',
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      'Unlimited DMs',
      '10+ accounts',
      'Auto warmup',
      'Humanize voice notes',
      'Basic admin controls',
      'White-label options',
      'API access',
      'Dedicated support',
    ],
    cta: 'Get Started',
    popular: false,
  },
];

function PricingCard({ 
  plan, 
  isYearly 
}: { 
  plan: typeof plans[0]; 
  isYearly: boolean;
}) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative rounded-3xl p-8 ${
        plan.popular 
          ? 'bg-white border-2 border-violet-500 shadow-xl shadow-violet-100' 
          : 'bg-white border border-gray-200 hover:border-violet-200 hover:shadow-lg'
      } transition-all duration-300`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 bg-violet-600 text-white text-sm font-medium rounded-full">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-sm text-gray-500">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="text-center mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={isYearly ? 'yearly' : 'monthly'}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex items-baseline justify-center gap-1"
          >
            <span className="text-4xl font-bold text-gray-900">${price}</span>
            <span className="text-gray-500">/month</span>
          </motion.div>
        </AnimatePresence>
        {isYearly && (
          <p className="text-sm text-green-600 mt-1">Save 20% with annual billing</p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-violet-600" />
            </div>
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        className={`w-full rounded-full py-6 font-semibold ${
          plan.popular
            ? 'bg-violet-600 hover:bg-violet-700 text-white'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
        }`}
      >
        {plan.cta}
      </Button>
    </motion.div>
  );
}

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            Pricing & Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Find the Perfect Plan for You or Your Team
          </h2>
          <p className="text-lg text-gray-600">
            Start for free and unlock more features as you grow
          </p>
        </ScrollReveal>

        {/* Toggle */}
        <ScrollReveal delay={0.1} className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-violet-600"
          />
          <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
          </span>
          {isYearly && (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
              Save 20%
            </span>
          )}
        </ScrollReveal>

        {/* Pricing Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <StaggerItem key={index}>
              <PricingCard plan={plan} isYearly={isYearly} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
