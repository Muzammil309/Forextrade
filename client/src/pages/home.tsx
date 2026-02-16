import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight, BarChart3, Wallet, Shield, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "top-2" : "top-4"
      }`}
      data-testid="navbar"
    >
      <div className="flex items-center gap-8 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
        <a href="#" className="flex items-center gap-2 text-white font-semibold text-sm tracking-tight" data-testid="link-logo">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2h4v4H2V2zm6 0h4v4H8V2zM2 8h4v4H2V8zm6 3h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontFamily: "var(--font-heading)" }}>ForexTrade</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-400 transition-colors" data-testid="link-features">Features</a>
          <a href="#pricing" className="text-sm text-gray-400 transition-colors" data-testid="link-prices">Prices</a>
          <a href="#testimonials" className="text-sm text-gray-400 transition-colors" data-testid="link-testimonials">Testimonials</a>
        </div>
        <Button asChild className="rounded-full">
          <a href="#cta" data-testid="link-start-trading">Start Trading</a>
        </Button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-8 px-4 md:px-8 lg:px-16 overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-40" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
              <path d="M4 4h3v3H4V4zm5 0h3v3H9V4zM4 9h3v3H4V9zm5 2h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Next-gen forex trading platform
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Trade forex with{" "}
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-primary to-purple-300">
            confidence & security
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed"
        >
          Experience seamless forex trading with advanced features, real-time
          analytics, and institutional-grade security.{" "}
          <span className="text-white font-medium">Start trading in minutes.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 flex-wrap"
        >
          <Button asChild size="lg" className="rounded-full">
            <a href="#cta" data-testid="button-start-trading-hero">Start Trading Now</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="#features" data-testid="button-view-markets">
              View Markets
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="/images/chart2.png"
              alt="Trade Dashboard"
              className="w-full h-auto"
              data-testid="img-dashboard"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const partnerLogos = [
  "/images/log1.png",
  "/images/log2.png",
  "/images/log3.png",
  "/images/log4.png",
  "/images/log5.png",
];

function PartnersSection() {
  const allLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="py-16 overflow-hidden border-t border-white/5" data-testid="section-partners">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
        <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
          {allLogos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center px-8 md:px-12">
              <img
                src={logo}
                alt={`Partner logo ${(i % 5) + 1}`}
                className="h-8 md:h-10 opacity-50 grayscale transition-opacity"
                data-testid={`img-partner-${i}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: BarChart3,
    title: "Advanced Trading Interface",
    description: "Professional-grade trading tools with real-time market data and advanced charting capabilities.",
  },
  {
    icon: Wallet,
    title: "Portfolio Management",
    description: "Track your investments and monitor your gains with our comprehensive portfolio dashboard.",
  },
  {
    icon: Shield,
    title: "Security & Verification",
    description: "Industry-leading security measures with KYC verification process to protect your assets.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Detailed analytics and credit scoring system to help you make informed decisions.",
  },
];

function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="py-24 px-4 md:px-8 lg:px-16" data-testid="section-features">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Advanced Trading{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">
              Features & Tools
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Experience professional-grade trading tools and features designed for both novice and experienced crypto traders.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-3">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-5 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFeature === i
                    ? "bg-white/5 border border-white/10"
                    : "border border-transparent"
                }`}
                onClick={() => setActiveFeature(i)}
                data-testid={`feature-card-${i}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeFeature === i ? "bg-primary/20 text-primary" : "bg-white/5 text-gray-400"
                  }`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl blur-xl opacity-50" />
            <div className="relative rounded-xl overflow-hidden border border-white/10">
              <img
                src="/images/fit1.png"
                alt="Advanced Trading Interface"
                className="w-full h-auto"
                data-testid="img-features"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Basic Trader",
    price: "$0",
    period: "/month",
    description: "Perfect for beginners starting their crypto journey",
    features: ["Basic spot trading", "Market & limit orders", "Basic market analysis", "Email support"],
    popular: false,
  },
  {
    name: "Pro Trader",
    price: "$29",
    period: "/month",
    description: "Advanced features for serious traders",
    features: [
      "Advanced trading tools",
      "Margin trading up to 10x",
      "Advanced technical analysis",
      "Priority support",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "",
    description: "Enterprise-grade solutions for institutions",
    features: [
      "Custom trading solutions",
      "Unlimited trading volume",
      "OTC desk access",
      "Dedicated account manager",
      "Custom API integration",
      "24/7 priority support",
    ],
    popular: false,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 md:px-8 lg:px-16" data-testid="section-pricing">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Choose Your Trading Plan
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Select the perfect trading plan with advanced features and competitive fees
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative p-6 rounded-xl border transition-all ${
                plan.popular
                  ? "bg-white/[0.06] border-primary/40"
                  : "bg-white/[0.03] border-white/10"
              }`}
              data-testid={`pricing-card-${i}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 text-sm">{plan.period}</span>}
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.popular ? "default" : "outline"}
                className="w-full rounded-full"
              >
                <a href="#cta" data-testid={`button-pricing-${i}`}>Start Trading</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Michael Chen",
    role: "Professional Trader",
    avatar: "/images/av1.png",
    text: "The real-time market data and advanced trading features have significantly improved my trading performance. The platform's security measures give me peace of mind.",
  },
  {
    name: "Sarah Johnson",
    role: "Crypto Fund Manager",
    avatar: null,
    initial: "S",
    text: "ForexTrade's institutional-grade tools have transformed our trading strategy. The API integration and automated features have saved us countless hours.",
  },
  {
    name: "David Wilson",
    role: "Early Forex Investor",
    avatar: "/images/av2.png",
    text: "The customer support is exceptional, and the platform's intuitive design made getting started with crypto trading seamless. A game-changer for both beginners and pros.",
  },
  {
    name: "Emily Zhang",
    role: "DeFi Developer",
    avatar: "/images/av4.png",
    text: "We've seen remarkable improvements in our trading efficiency since switching to ForexTrade. The smart order routing and liquidity aggregation are particularly impressive.",
  },
  {
    name: "James Rodriguez",
    role: "Forex Security Expert",
    avatar: "/images/av3.png",
    text: "The security features are robust and the regular updates keep us ahead of emerging threats. It's exactly what the Forex industry needed.",
  },
  {
    name: "Lisa Thompson",
    role: "Portfolio Manager",
    avatar: "/images/av1.png",
    text: "The platform's ability to handle complex trading strategies while maintaining simplicity in its interface is remarkable. It's been invaluable for our portfolio management.",
  },
];

function TestimonialsSection() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 overflow-hidden" data-testid="section-testimonials">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Trusted by Traders
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Join thousands of satisfied traders on ForexTrade
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
        <div className="flex animate-scroll-testimonials" style={{ width: "max-content" }}>
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-[350px] flex-shrink-0 mx-3 p-6 rounded-xl bg-white/[0.03] border border-white/10"
              data-testid={`testimonial-card-${i}`}
            >
              <div className="flex items-center gap-3 mb-4">
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-sm">
                    {t.initial}
                  </div>
                )}
                <div>
                  <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="py-24 px-4 md:px-8 lg:px-16" data-testid="section-cta">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-600/10 to-primary/10 rounded-2xl blur-xl" />
          <div className="relative p-12 md:p-16 rounded-2xl border border-white/10 bg-white/[0.03]">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to start trading?
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto">
              Join thousands of traders who have already discovered the power of our platform.
            </p>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#" data-testid="button-create-account">
                Create Account
                <ChevronRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 lg:px-16 border-t border-white/5" data-testid="footer">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white font-semibold text-sm">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2h4v4H2V2zm6 0h4v4H8V2zM2 8h4v4H2V8zm6 3h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontFamily: "var(--font-heading)" }}>ForexTrade</span>
        </div>
        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} ForexTrade. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
