import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

const imgLogo = "/logo.png";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using ColdNerd ("Service"), you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our Service. These terms apply to all visitors, users, and others who access or use the Service.`,
  },
  {
    title: "2. Description of Service",
    content: `ColdNerd provides Instagram automation tools including but not limited to: automated direct messaging, campaign management, audience targeting, analytics, follow-up sequences, and account warmup features. Our Service is designed to help businesses and individuals scale their Instagram outreach while maintaining compliance with platform guidelines.`,
  },
  {
    title: "3. User Accounts",
    content: `When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your account credentials and for any activities or actions under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account. You may not use another person's account without permission.`,
  },
  {
    title: "4. Acceptable Use Policy",
    content: `You agree not to use ColdNerd to:\n\n• Send spam, unsolicited messages, or harassing content\n• Violate Instagram's Terms of Service or Community Guidelines\n• Impersonate any person or entity\n• Collect personal information of others without consent\n• Distribute malware or engage in phishing\n• Circumvent any rate-limiting or safety features of the Service\n• Use the Service for any illegal or unauthorized purpose\n\nWe reserve the right to terminate accounts that violate these policies without prior notice.`,
  },
  {
    title: "5. Instagram Compliance",
    content: `ColdNerd includes built-in safety controls such as smart timing, rate limiting, and account warmup features to help you comply with Instagram's guidelines. However, you are solely responsible for ensuring your use of the Service complies with Instagram's Terms of Service and any applicable laws. ColdNerd is not affiliated with, endorsed by, or sponsored by Instagram or Meta Platforms, Inc.`,
  },
  {
    title: "6. Subscription & Billing",
    content: `ColdNerd offers subscription-based pricing plans (Basic, Pro, and Ultimate). By subscribing to a paid plan:\n\n• You authorize us to charge your payment method on a recurring basis\n• Subscription fees are billed in advance on a monthly or annual basis\n• You may cancel your subscription at any time; cancellation takes effect at the end of the current billing period\n• No refunds will be issued for partial billing periods\n• We reserve the right to modify pricing with 30 days' advance notice`,
  },
  {
    title: "7. Data Privacy & Security",
    content: `We take your privacy seriously. We collect and process personal data in accordance with our Privacy Policy. Your Instagram credentials and campaign data are encrypted and stored securely. We do not sell your personal information to third parties. You retain ownership of all content and data you provide through the Service.`,
  },
  {
    title: "8. Intellectual Property",
    content: `The Service and its original content, features, and functionality are owned by ColdNerd and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on our Service without express written consent.`,
  },
  {
    title: "9. Limitation of Liability",
    content: `In no event shall ColdNerd, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Service. This includes but is not limited to: loss of profits, data, or business opportunities; Instagram account restrictions or bans; or any other intangible losses. Our total liability shall not exceed the amount you paid for the Service in the twelve months preceding any claim.`,
  },
  {
    title: "10. Service Availability",
    content: `We strive to maintain 99.9% uptime but do not guarantee uninterrupted access to the Service. We may perform scheduled maintenance, updates, or modifications that temporarily affect availability. We are not responsible for any disruptions caused by third-party services, including Instagram's API changes or outages.`,
  },
  {
    title: "11. Termination",
    content: `We may terminate or suspend your account immediately, without prior notice, if you breach these Terms. Upon termination, your right to use the Service will cease immediately. All provisions of these Terms that should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.`,
  },
  {
    title: "12. Changes to Terms",
    content: `We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through the Service. Your continued use of the Service after changes constitute acceptance of the new Terms. It is your responsibility to review these Terms periodically.`,
  },
  {
    title: "13. Contact Information",
    content: `If you have any questions about these Terms and Conditions, please contact us at:\n\nEmail: support@coldnerd.com\nWebsite: https://coldnerd.com`,
  },
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#F5F8FF]">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between w-[95%] max-w-[1200px] px-4 sm:px-6 lg:px-8 py-3 rounded-full bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40">
        <Link to="/" className="h-[50px] w-[160px] lg:w-[200px] relative shrink-0 flex items-center no-underline">
          <img alt="ColdNerd Logo" className="h-full w-auto object-contain pointer-events-none" src={imgLogo} />
        </Link>
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
          <span className="font-['Inter:Bold',sans-serif] font-bold text-[#0d0d0d] text-[20px]">Terms & Conditions</span>
        </div>
        <div className="flex gap-[8px] items-center shrink-0">
          <Link to="/pricing" className="flex items-center gap-1 font-semibold text-[#2a6ff3] text-[15px] hover:opacity-80 transition-opacity no-underline">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Pricing</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#2a6ff3] text-sm font-medium mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Legal
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Terms and Conditions
          </h1>
          <p className="text-base sm:text-lg text-gray-500">
            Last updated: March 24, 2026
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-0">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm mb-4"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <div className="text-[15px] text-gray-600 leading-relaxed whitespace-pre-line">{section.content}</div>
            </motion.div>
          ))}
        </div>

        {/* Back to Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2a6ff3] text-white font-semibold hover:bg-[#1f5ccf] transition-colors no-underline"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Pricing
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
