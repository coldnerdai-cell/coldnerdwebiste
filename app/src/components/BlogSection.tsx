import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const articles = [
  {
    title: 'How Instagram Automation Can Save You 10+ Hours Every Week',
    excerpt: 'Discover how automated outreach can free up your time while growing your audience consistently.',
    readTime: '5 min read',
    category: 'Productivity',
    color: 'bg-violet-100',
  },
  {
    title: 'Common Instagram Outreach Mistakes That Kill Your Reply Rate',
    excerpt: 'Learn the pitfalls to avoid when reaching out to potential followers and customers.',
    readTime: '4 min read',
    category: 'Strategy',
    color: 'bg-red-100',
  },
  {
    title: 'How Agencies Use Instagram Automation to Get More Clients',
    excerpt: 'See how marketing agencies leverage automation to scale their client acquisition.',
    readTime: '6 min read',
    category: 'Case Study',
    color: 'bg-blue-100',
  },
  {
    title: 'Top Instagram Lead Generation Strategies for 2025',
    excerpt: 'Stay ahead of the curve with these cutting-edge lead generation tactics.',
    readTime: '7 min read',
    category: 'Growth',
    color: 'bg-green-100',
  },
  {
    title: 'Instagram Outreach vs Paid Ads: Which One Works Better?',
    excerpt: 'Compare the ROI of organic outreach versus paid advertising on Instagram.',
    readTime: '5 min read',
    category: 'Comparison',
    color: 'bg-amber-100',
  },
  {
    title: 'How Automated Follow-Ups Increase Instagram Replies',
    excerpt: 'The science behind follow-up timing and how it impacts your response rates.',
    readTime: '4 min read',
    category: 'Tips',
    color: 'bg-pink-100',
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Latest Insights & Tips
            </h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-violet-600 font-medium hover:text-violet-700 transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </ScrollReveal>

        {/* Articles Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <StaggerItem key={index}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-violet-200 transition-all duration-300 cursor-pointer"
              >
                {/* Thumbnail Placeholder */}
                <div className={`h-40 ${article.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-700">
                        {article.category[0]}
                      </span>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
