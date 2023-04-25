import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function TakeName() {
    const router = useRouter();
    const { name } = router.query;

    return (
        <>
        <div className="thankyou">
          <motion.label
            animate={{
              scale: [1, 1.1, 1, 1.1, 1],
              opacity: [1, 0.5, 0.5, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              repeat: Infinity,
            }}
            className="heading"
          >
            Thank You (Dhanyawad) {name}
          </motion.label>
        </div>
      </>
    );
  }










