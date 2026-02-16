import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, ChevronRight, BarChart3, Wallet, Shield, TrendingUp, LayoutGrid, Twitter, Github, Linkedin, Menu } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 rounded-full flex items-center justify-between px-4 transition-all duration-300 ${
        scrolled
          ? "h-14 bg-[#1B1B1B]/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-2xl"
          : "h-14 bg-[#1B1B1B] w-[95%] max-w-3xl"
      }`}
      data-testid="navbar"
    >
      <a href="#" className="flex items-center gap-2 text-white" data-testid="link-logo">
        <LayoutGrid className="w-5 h-5 text-indigo-400" />
        <span className="clash-display text-base font-medium">ForexTrade</span>
      </a>

      <nav className="hidden md:flex items-center gap-6">
        {["Features", "Prices", "Testimonials"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            className="text-sm text-zinc-400 hover:-translate-y-1 ease-out transition-all duration-200 cursor-pointer"
            data-testid={`link-${item.toLowerCase()}`}
          >
            {item}
          </button>
        ))}
      </nav>

      <button
        onClick={() => scrollTo("cta")}
        className="hidden md:block button-gradient clash-display text-base bg-gradient-to-r from-indigo-400 to-indigo-600 px-4 py-2 rounded-full cursor-pointer hover:-translate-y-0.5 duration-200 transition-all ease-out hover:shadow-xl hover:shadow-indigo-900"
        data-testid="link-start-trading"
      >
        Start Trading
      </button>

      <button
        className="md:hidden text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
        data-testid="button-mobile-menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#1B1B1B] border border-white/10 rounded-xl p-4 flex flex-col gap-3 md:hidden">
          {["Features", "Prices", "Testimonials"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm text-zinc-400 text-left py-2"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("cta")}
            className="button-gradient clash-display text-base rounded-full py-2 px-4 cursor-pointer"
          >
            Start Trading
          </button>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <section className="relative container mx-auto px-4 pt-40 pb-20" data-testid="section-hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-zinc-400">
          <LayoutGrid className="w-4 h-4 text-indigo-400" />
          Next-gen forex trading platform
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-6 max-w-3xl clash-display"
      >
        <span className="grad1">Trade forex with</span>
        <br />
        <span className="text-white font-medium">confidence & security</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base md:text-lg text-zinc-400 max-w-xl mb-8 leading-relaxed"
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
        <button
          onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-indigo-500 text-white px-6 py-3 rounded-full text-base clash-display cursor-pointer hover:-translate-y-0.5 transition-all duration-200"
          data-testid="button-start-trading-hero"
        >
          Start Trading Now
        </button>
        <button
          onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          className="glass rounded-full px-6 py-3 text-base text-white flex items-center gap-2 cursor-pointer hover:-translate-y-0.5 transition-all duration-200"
          data-testid="button-view-markets"
        >
          View Markets
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 relative"
        style={{ perspective: 600 }}
      >
        <motion.div
          ref={targetRef}
          className="glass rounded-xl overflow-hidden"
          style={{ rotateX, transformStyle: "preserve-3d" }}
        >
          <img
            src="/images/chart2.png"
            alt="Trade Dashboard"
            className="w-full h-auto hidden lg:block"
            data-testid="img-dashboard"
          />
          <img
            src="/images/chart2.png"
            alt="Trade Dashboard"
            className="w-full h-auto block lg:hidden"
          />
        </motion.div>
      </motion.div>
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
    <section className="w-full overflow-hidden cursor-pointer bg-[#050505] backdrop-blur-sm py-12 mt-20" data-testid="section-partners">
      <motion.div
        className="flex gap-12 items-center"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: "-50%" }}
        transition={{
          opacity: { duration: 0.5 },
          x: { duration: 15, repeat: Infinity, ease: "linear", delay: 0.5 },
        }}
      >
        {allLogos.map((logo, i) => (
          <motion.img
            key={i}
            src={logo}
            alt={`Partner ${(i % 5) + 1}`}
            className="h-8 object-contain"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            data-testid={`img-partner-${i}`}
          />
        ))}
      </motion.div>
    </section>
  );
}

const features = [
  {
    icon: BarChart3,
    title: "Advanced Trading Interface",
    description: "Professional-grade trading tools with real-time market data and advanced charting capabilities.",
    image: "/images/fit1.png",
  },
  {
    icon: Wallet,
    title: "Portfolio Management",
    description: "Track your investments and monitor your gains with our comprehensive portfolio dashboard.",
    image: "/images/fit3.png",
  },
  {
    icon: Shield,
    title: "Security & Verification",
    description: "Industry-leading security measures with KYC verification process to protect your assets.",
    image: "/images/fit4.png",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Detailed analytics and credit scoring system to help you make informed decisions.",
    image: "/images/fit2.png",
  },
];

function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoRotation = () => {
    intervalRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
  };

  const stopAutoRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoRotation();
    return () => stopAutoRotation();
  }, []);

  return (
    <section id="features" className="container mx-auto px-4 py-24" data-testid="section-features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 clash-display">
          <span className="grad1">
            Advanced Trading
            <br />
            Features & Tools
          </span>
        </h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
          Experience professional-grade trading tools and features designed for both novice and experienced crypto traders.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`p-5 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                activeFeature === i
                  ? "border-indigo-400/40 bg-indigo-500/10"
                  : "border-transparent"
              }`}
              onClick={() => {
                stopAutoRotation();
                setActiveFeature(i);
                startAutoRotation();
              }}
              onMouseEnter={() => {
                stopAutoRotation();
                setActiveFeature(i);
              }}
              onMouseLeave={() => {
                startAutoRotation();
              }}
              data-testid={`feature-card-${i}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  activeFeature === i ? "bg-indigo-500/20 text-indigo-400" : "bg-white/5 text-zinc-400"
                }`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-7 min-h-[320px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="glass rounded-xl overflow-hidden w-full relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-transparent opacity-20" />
              <img
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-auto relative z-10"
                data-testid="img-features"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function GlowCard({ children, popular }: { children: React.ReactNode; popular?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlowStyle({
      background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,.06), transparent 40%)`,
    });
  };

  const handleMouseLeave = () => {
    setGlowStyle({});
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-950 ${
        popular ? "border-indigo-500 border-2" : "border-white/10 border-2"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none" style={glowStyle} />
      <div className="relative z-10">{children}</div>
    </div>
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
    nameGradient: false,
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
    nameGradient: true,
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
    nameGradient: false,
  },
];

function PricingSection() {
  return (
    <section id="prices" className="container mx-auto px-4 py-24" data-testid="section-pricing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 clash-display">
          <span className="grad1">
            Choose Your
            <br />
            Trading Plan
          </span>
        </h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
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
          >
            <GlowCard popular={plan.popular}>
              <div className="p-6">
                {plan.popular && (
                  <div className="mb-4">
                    <span className="text-xs font-medium bg-indigo-400/30 text-indigo-100 rounded-full px-3 py-1">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`font-semibold text-lg mb-2 clash-display ${
                      plan.nameGradient
                        ? "bg-gradient-to-r from-emerald-200 to-emerald-800 bg-clip-text text-transparent"
                        : "text-white"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold clash-display text-indigo-300">{plan.price}</span>
                    {plan.period && <span className="text-zinc-400 text-sm">{plan.period}</span>}
                  </div>
                  <p className="text-zinc-400 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className="button-gradient w-full bg-indigo-500 py-4 text-white rounded-full text-lg clash-display cursor-pointer"
                  data-testid={`button-pricing-${i}`}
                >
                  Start Trading
                </button>
              </div>
            </GlowCard>
          </motion.div>
        ))}
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
  return (
    <section id="testimonials" className="container mx-auto px-4 py-24 overflow-hidden" data-testid="section-testimonials">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 clash-display">
          <span className="grad1">Trusted by Traders</span>
        </h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
          Join thousands of satisfied traders on ForexTrade
        </p>
      </motion.div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.setProperty("--marquee-play-state", "paused");
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.setProperty("--marquee-play-state", "running");
        }}
      >
        <div className="animate-marquee">
          <div className="flex gap-6 shrink-0">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl"
                data-testid={`testimonial-card-${i}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {t.avatar ? (
                    <div className="h-12 w-12 overflow-clip rounded-full">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="h-12 w-12 overflow-clip rounded-full bg-pink-500 flex items-center justify-center text-white font-semibold">
                      {t.name[0]}
                    </div>
                  )}
                  <div>
                    <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                    <p className="text-zinc-400 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-6 shrink-0">
            {testimonials.map((t, i) => (
              <div
                key={`dup-${i}`}
                className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  {t.avatar ? (
                    <div className="h-12 w-12 overflow-clip rounded-full">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="h-12 w-12 overflow-clip rounded-full bg-pink-500 flex items-center justify-center text-white font-semibold">
                      {t.name[0]}
                    </div>
                  )}
                  <div>
                    <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                    <p className="text-zinc-400 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="container mx-auto px-4 py-20 relative bg-black" data-testid="section-cta">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('/images/crack.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 clash-display">
          <span className="grad1">Ready to start trading?</span>
        </h2>
        <p className="text-zinc-400 text-base md:text-lg mb-8 max-w-lg mx-auto">
          Join thousands of traders who have already discovered the power of our platform.
        </p>
        <button
          className="button-gradient flex items-center mx-auto text-lg bg-gradient-to-r from-indigo-400 to-indigo-500 clash-display hover:-translate-y-1 transition2 text-white py-3 rounded-full px-5 cursor-pointer"
          data-testid="button-create-account"
        >
          Create Account
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>
    </section>
  );
}

const footerLinks = {
  Trading: ["Markets", "Trading Fees"],
  Resources: ["Trading Guide", "Market Analysis"],
  Legal: ["Privacy Policy", "Terms of Services"],
};

function Footer() {
  return (
    <footer className="w-full py-12 mt-20" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="bg-[#0A0A0A]/80 border border-white/10 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <a href="#" className="flex items-center gap-2 text-white mb-4">
                <LayoutGrid className="w-5 h-5 text-indigo-400" />
                <span className="clash-display text-base font-medium">ForexTrade</span>
              </a>
              <p className="text-zinc-400 text-sm mb-4">
                Next-generation forex trading platform with advanced features.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="text-zinc-400 hover:text-indigo-300 transition2" data-testid="link-twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-indigo-300 transition2" data-testid="link-github">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-indigo-300 transition2" data-testid="link-linkedin">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-zinc-400 text-sm hover:text-indigo-300 hover:ml-3 transition2"
                        data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 mt-8 pt-6">
            <p className="text-zinc-500 text-xs text-center">
              &copy; {new Date().getFullYear()} Footprint Arts. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="text-zinc-100 bg-black min-w-full min-h-screen overflow-x-hidden">
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
