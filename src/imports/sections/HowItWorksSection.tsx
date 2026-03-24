import { motion } from "motion/react";
import { Rocket, Zap, PenTool } from "lucide-react";

const steps = [
  {
    icon: Rocket,
    title: "Connect Your Account",
    description: "Link your Instagram account in seconds. ColdNerd uses secure OAuth so your credentials are never stored.",
    color: "text-[#2a6ff3]",
    bg: "bg-blue-50",
    ring: "ring-blue-200",
  },
  {
    icon: PenTool,
    title: "Craft Your Campaigns",
    description: "Design DM sequences, follow-up flows, and targeting rules with our intuitive visual editor.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    ring: "ring-emerald-200",
  },
  {
    icon: Zap,
    title: "Grow on Autopilot",
    description: "Sit back as ColdNerd sends humanized DMs, warms your account, and scales your outreach safely.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    ring: "ring-amber-200",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
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
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            3 Simple Steps to Scale
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Get started in minutes — no technical skills required
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[72px] left-[16%] right-[16%] h-px bg-gradient-to-r from-blue-200 via-emerald-200 to-amber-200" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Number badge */}
              <div className="absolute -top-3 -right-3 md:right-auto md:-top-2 md:-right-2 z-10">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#2a6ff3] text-white text-xs font-bold shadow-md">
                  {i + 1}
                </span>
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-20 h-20 sm:w-24 sm:h-24 ${step.bg} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}
              >
                <step.icon className={`w-9 h-9 sm:w-10 sm:h-10 ${step.color}`} />
              </motion.div>

              {/* Text */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
