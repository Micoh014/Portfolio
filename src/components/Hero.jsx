import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext.jsx";
import { translations } from "../lib/translations.js";

// whileInView (not initial/animate) so this replays every time Hero becomes
// visible — including on a hard refresh where the browser restores scroll
// position and Hero may already be off-screen when the animation would have
// fired on mount. `once: true` keeps it from re-triggering on every scroll
// past the section.
const lineVariants = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15 + i * 0.12,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", delay },
  }),
};

export default function Hero({ onOpenContact }) {
  const { lang } = useLanguage();

  return (
    <section className="min-h-[60svh] flex flex-col justify-center pt-[140px] pb-20 relative">
      <div className="max-w-content mx-auto px-8 sm:px-5 w-full flex flex-col md:flex-row items-center justify-start gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.3, 1], delay: 0.3 }}
          className="hidden md:block shrink-0"
        >
          <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-[#E8A46B] blur-2xl opacity-30" />
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-br from-accent to-[#E8A46B] shadow-[0_20px_60px_-15px_rgba(193,87,31,0.4)]">
              <picture>
                <source srcSet="/Profile.webp" type="image/webp" />
                <img
                  src="/Profile.jpg"
                  alt="Micoh Angelo Ojenar"
                  width="320"
                  height="320"
                  fetchpriority="high"
                  className="w-full h-full rounded-full object-cover border-4 border-bg"
                />
              </picture>
            </div>
          </div>
        </motion.div>

        <div className="max-w-[600px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[13px] text-inkMuted flex items-center gap-2.5 mb-6"
          >
            <span className="inline-block w-2 h-4 bg-accent cursor-blink" />
            whoami
          </motion.div>

          <h1 className="font-display font-semibold tracking-tight text-ink text-[34px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.05]">
            <span className="block overflow-hidden">
              <motion.span
                custom={0}
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                className="inline-block"
              >
                Micoh Angelo
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                custom={1}
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                className="inline-block bg-gradient-to-r from-accent to-[#E8A46B] bg-clip-text text-transparent"
              >
                Ojenar
              </motion.span>
            </span>
          </h1>

          <motion.p
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="mt-6 text-sm sm:text-lg md:text-base text-inkMuted"
          >
            {translations.heroBio[lang]}
          </motion.p>

          <motion.div
            custom={0.8}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-inkMuted"
          >
            <a
              href="https://github.com/Micoh014"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              github ↗
            </a>

            <a
              href="https://www.linkedin.com/in/micohojenar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              linkedin ↗
            </a>
            <button
              type="button"
              onClick={onOpenContact}
              className="hover:text-accent"
            >
              message me
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-9 left-8 font-mono text-[11px] text-inkDim items-center gap-2.5"
      >
        <span className="w-px h-[34px] bg-gradient-to-b from-inkDim to-transparent" />
        SCROLL
      </motion.div>
    </section>
  );
}
