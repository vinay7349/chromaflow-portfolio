import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useMotionValueEvent,
} from "framer-motion";

function PremiumParallaxOrbs({ scrollY }) {
  const spring = { mass: 0.2, stiffness: 68, damping: 34 };

  const y1 = useSpring(useTransform(scrollY, [0, 3200], [0, 200]), spring);
  const y2 = useSpring(useTransform(scrollY, [0, 3200], [0, 110]), spring);
  const y3 = useSpring(useTransform(scrollY, [0, 2800], [0, 75]), spring);
  const x1 = useSpring(useTransform(scrollY, [0, 2400], [0, -36]), spring);
  const x2 = useSpring(useTransform(scrollY, [0, 2600], [0, 28]), spring);

  return (
    <>
      <motion.div
        aria-hidden
        className="premium-parallax-orb premium-parallax-orb--a"
        style={{ y: y1, x: x1 }}
      />
      <motion.div
        aria-hidden
        className="premium-parallax-orb premium-parallax-orb--b"
        style={{ y: y2, x: x2 }}
      />
      <motion.div
        aria-hidden
        className="premium-parallax-orb premium-parallax-orb--c"
        style={{ y: y3 }}
      />
      <div className="premium-parallax-vignette" aria-hidden />
    </>
  );
}

/**
 * Viewport-fixed ambient layers + CSS variables on the scroll container.
 * Does not wrap or alter section components.
 */
function PremiumScrollAmbient({ scrollRef }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll({ container: scrollRef });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const el = scrollRef.current;
    if (!el) return;
    const hero = Math.min(1, Math.max(0, latest / 480));
    const deep = Math.min(1, Math.max(0, latest / 3200));
    el.style.setProperty("--scroll-hero", hero.toFixed(4));
    el.style.setProperty("--scroll-deep", deep.toFixed(4));
    el.style.setProperty("--bg-shift-y", `${(latest * 0.035).toFixed(2)}px`);
    el.style.setProperty("--bg-shift-x", `${(latest * 0.012).toFixed(2)}px`);
  });

  if (reduceMotion) {
    return null;
  }

  return <PremiumParallaxOrbs scrollY={scrollY} />;
}

export default PremiumScrollAmbient;
