import { motion } from "motion/react";
import { Users, MessageSquare, TrendingUp } from "lucide-react";

const timelineSteps = [
  {
    number: "01",
    title: "Find Your Target Audience",
    description:
      "Reach the right audience with advanced targeting tools. Define demographics, interests, and behaviors to pinpoint the perfect prospects for your brand.",
    icon: Users,
  },
  {
    number: "02",
    title: "Create Your Outreach Flow",
    description:
      "Write DMs and schedule follow-ups effortlessly. Our visual builder lets you craft multi-step sequences with smart delays and personalization tokens.",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Turn Conversations into Leads",
    description:
      "Automate campaigns and track results in real time. Watch your pipeline grow as ColdNerd converts warm conversations into qualified leads.",
    icon: TrendingUp,
  },
];

export function VerticalTimelineSection() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2a6ff3] text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            How it works :{" "}
            <span className="text-[#2a6ff3]">3 simple steps</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            Launch and automate your Instagram outreach in just three simple
            steps
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2a6ff3]/20 via-[#2a6ff3] to-[#2a6ff3]/20 -translate-x-1/2" />

          {timelineSteps.map((step, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 mb-16 sm:mb-20 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content side */}
                <div
                  className={`w-full md:w-[calc(50%-40px)] ${
                    isEven ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                      isEven ? "md:ml-auto" : "md:mr-auto"
                    } max-w-md`}
                  >
                    <span className="text-[#2a6ff3] text-sm font-bold tracking-wider mb-2 block">
                      STEP {step.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                    className="w-16 h-16 rounded-full bg-[#2a6ff3] flex items-center justify-center shadow-lg shadow-blue-200/50"
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </motion.div>
                </div>

                {/* Mobile dot */}
                <div className="md:hidden flex items-center justify-center order-first">
                  <div className="w-14 h-14 rounded-full bg-[#2a6ff3] flex items-center justify-center shadow-lg shadow-blue-200/50">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Empty side */}
                <div className="hidden md:block w-[calc(50%-40px)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
