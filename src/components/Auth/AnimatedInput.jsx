
import { motion, AnimatePresence } from "motion/react";

const AnimatedInput = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  error,
  shakeKey,
  onChange,
  autoComplete,
  icon,
}) => {
  return (
    <div className="form-group mb-2">

      <label htmlFor={name} className="login-input-label">
        <i className={`bi ${icon}`}></i>
        <span>{label}</span>
      </label>

      <motion.input
        type={type}
        id={name}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
        initial={false}
        animate={{
          x: shakeKey > 0
            ? [0, -7, 7, -5, 5, 0]
            : 0,
          borderColor: error ? "#dc3545" : "#ced4da",
        }}
        transition={{
          x: {
            duration: 0.4,
            ease: "easeInOut",
          },
          borderColor: {
            duration: 0.2,
          },
        }}
      />

      <div className="error">
        <AnimatePresence mode="wait">
          {error && (
            <motion.p
              key={error}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default AnimatedInput;
