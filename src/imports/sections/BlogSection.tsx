import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import blog5 from "../../assets/blog5.png";
import blog6 from "../../assets/blog6.png";

const articles = [
  {
    title: "How to Get 10K Instagram Followers in 2025",
    image: blog1,
    bg: "bg-[#eef4ff]",
    textColor: "text-gray-900",
  },
  {
    title: "Cold DM Outreach: The Complete Guide",
    image: blog2,
    bg: "bg-[#2a6ff3]",
    textColor: "text-white",
  },
  {
    title: "Instagram Algorithm 2025: What Actually Matters",
    image: blog3,
    bg: "bg-[#eef4ff]",
    textColor: "text-gray-900",
  },
  {
    title: "Account Warmup: Why It's Critical for Automation",
    image: blog4,
    bg: "bg-[#2a6ff3]",
    textColor: "text-white",
  },
  {
    title: "5 DM Templates That Get 40%+ Reply Rates",
    image: blog5,
    bg: "bg-[#eef4ff]",
    textColor: "text-gray-900",
  },
  {
    title: "How Agencies Manage 50+ Client Accounts",
    image: blog6,
    bg: "bg-[#2a6ff3]",
    textColor: "text-white",
  },
];

export function BlogSection() {
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
            Blog &amp; Resources
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Learn, Grow &amp; Automate
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Expert guides on Instagram growth, DM automation, and scaling outreach
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8"
        >
          {articles.map((article, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <Link to="/blog" className="block group no-underline">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${article.bg} rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col`}
                >
                  {/* Image */}
                  <div className="relative h-32 sm:h-56 flex items-center justify-center p-3 sm:p-6 pt-4 sm:pt-8 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="max-h-full max-w-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title */}
                  <div className="px-3 sm:px-6 pb-3 sm:pb-6 pt-0 mt-auto">
                    <h3
                      className={`text-sm sm:text-lg font-semibold ${article.textColor} leading-snug line-clamp-3`}
                    >
                      {article.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:border-[#2a6ff3] hover:text-[#2a6ff3] transition-colors font-medium no-underline"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
