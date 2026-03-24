import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is using this tool safe for my Instagram account?',
    answer: 'Yes! Our system simulates human-like behavior with smart delays, activity limits, and built-in safety controls to minimize risk. We use advanced algorithms to mimic natural patterns and stay within Instagram\'s guidelines.',
  },
  {
    question: 'Is my data secure and private?',
    answer: 'Absolutely. We use bank-level encryption (AES-256) to protect your data. Your login credentials are never stored in plain text, and we never share your information with third parties. We\'re GDPR compliant and regularly undergo security audits.',
  },
  {
    question: 'Can I manage multiple Instagram accounts?',
    answer: 'Yes! Depending on your plan, you can manage multiple accounts from a single dashboard. The Pro plan supports up to 3 accounts, while the Ultimate plan supports 10+ accounts with advanced admin controls.',
  },
  {
    question: 'Can I automate DMs and follow-ups?',
    answer: 'Yes, that\'s our core feature! You can create personalized DM sequences with automated follow-ups at intervals you choose. Our AI helps you craft messages that feel authentic and human.',
  },
  {
    question: 'Do I need to install anything on my computer?',
    answer: 'No, Orbitask is completely cloud-based. You can access your dashboard from any device with a web browser. There\'s no software to download or install.',
  },
  {
    question: 'Can I upgrade or downgrade my plan at any time?',
    answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades will take effect at the end of your current billing cycle. We prorate any differences in cost.',
  },
];

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            We've gathered some frequently asked questions to help you get started quickly and make the most of the platform
          </p>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-2xl border-none px-6 data-[state=open]:bg-violet-50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
