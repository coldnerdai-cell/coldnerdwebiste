import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollReveal } from './ScrollReveal';

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Overview & Updates', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'Learn', href: '#' },
      { name: 'Guides & Tutorials', href: '#' },
      { name: 'Overview & Updates', href: '#' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
    ],
  },
};

export function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-400">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-400">
                  Get the latest updates, tips, and insights delivered to your inbox
                </p>
              </div>
              <div className="flex gap-3 max-w-md w-full lg:w-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-12 pr-4 py-6 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-full focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
                <Button className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-6 py-6">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a 
              href="#"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold text-white">Orbitask</span>
            </motion.a>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Orbitask was built for the way we work today. We create smarter, more connected workspaces around the world.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:instagram.ai@gmail.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>instagram.ai@gmail.com</span>
              </a>
              <a 
                href="tel:+1333943439143" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+133-394-3439-143</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 2 }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-gray-500">
              Non Copyrighted &copy; 2025 Design and upload by Orbitask
            </p>
            <div className="flex items-center gap-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, color: '#fff' }}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
