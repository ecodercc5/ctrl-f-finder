import { HTMLMotionProps, motion } from "framer-motion";

interface Props extends HTMLMotionProps<"button"> {
  icon: React.FC<React.ComponentProps<"svg">>;
}

export const Button: React.FC<Props> = ({ icon: Icon, ...props }) => {
  return (
    <motion.button
      className="p-1 bg-secondary"
      {...props}
      whileHover={{
        backgroundColor: "#4D4D4D",
      }}
      whileTap={{ opacity: 0.8 }}
      transition={{
        duration: 0.15,
      }}
    >
      <Icon className="w-4 h-4 stroke-2 stroke-dark-gray" />
    </motion.button>
  );
};
