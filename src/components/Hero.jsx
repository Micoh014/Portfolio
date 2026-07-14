import { motion } from "framer-motion";

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

export default function Hero() {
  return (
    <section className="min-h-[60svh] flex flex-col justify-center pt-[140px] pb-20 relative">
      <div className="max-w-content mx-auto px-8 sm:px-5 w-full flex flex-col md:flex-row items-center justify-start gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.3, 1], delay: 0.3 }}
          className="hidden md:block shrink-0"
        >
          <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-[#B7A9FF] blur-2xl opacity-30" />
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-br from-accent to-[#B7A9FF] shadow-[0_20px_60px_-15px_rgba(108,76,255,0.4)]">
              <img
                src="/Profile.jpg"
                alt="Micoh Angelo Ojenar"
                className="w-full h-full rounded-full object-cover border-4 border-bg"
              />
            </div>
          </div>
        </motion.div>

        <div className="max-w-[600px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
                animate="visible"
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
                animate="visible"
                className="inline-block bg-gradient-to-r from-accent to-[#B7A9FF] bg-clip-text text-transparent"
              >
                Ojenar
              </motion.span>
            </span>
          </h1>

          <motion.p
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-sm sm:text-lg md:text-base text-inkMuted"
          >
            I am Full Stack &amp; Mobile App Developer. I create websites and
            mobile apps that solves problems and provide useful solutions that
            people can use in their daily lives.
          </motion.p>

          <motion.div
            custom={0.8}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
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
            <a
              href="mailto:micohangelo14@gmail.com"
              className="hover:text-accent"
            >
              email
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-9 left-8 font-mono text-[11px] text-inkDim items-center gap-2.5"
      >
        <span className="w-px h-[34px] bg-gradient-to-b from-inkDim to-transparent" />
        SCROLL
      </motion.div>
    </section>
  );
}
