import { motion } from "motion/react";

import "../styles/Login.css";

import AnimatedInput from "../components/Auth/AnimatedInput";
import LoadingLink from "../components/Auth/LoadingLink";
import FormFieldset from "../components/Common/FormFieldset";

import useLoginForm from "../hooks/useLoginForm";
import { notify } from "../utils/notify";

const Login = () => {
  const {
    form,
    loading,
    errors,
    shake,
    handleChange,
    handleSubmit,
  } = useLoginForm(handleLogin);

  // Login API handler
  async function handleLogin(formData) {
    try {
      // Replace this with your actual backend API.
      console.log("Login submitted:", formData);

      // Example:
      // const response = await fetch("/api/auth/login.php", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   credentials: "same-origin",
      //   body: JSON.stringify(formData),
      // });
      //
      // const data = await response.json();
      //
      // if (!response.ok) {
      //   throw new Error(data.message || "Login failed.");
      // }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      notify.success("Login successful!", "Welcome", 3000);

    } catch (error) {
      notify.error(
        error.message || "Unable to login. Please try again."
      );
    }
  }

  return (
    <div className="login-page">
      <motion.div
        className="login-container"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="login-gap">

          {/* Header */}
          <motion.div
            className="login-header"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <div className="login-brand-icon">
              <i className="bi bi-people-fill"></i>
            </div>

            <h1 className="login-title">Welcome Back</h1>

            <p className="login-subtitle">
              Sign in to continue to your account
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            className="login-body"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <FormFieldset loading={loading}>

                <AnimatedInput
                  label="Mobile Number"
                  name="mobile"
                  icon="bi-telephone"
                  type="tel"
                  placeholder="Enter mobile number"
                  value={form.mobile}
                  error={errors.mobile}
                  shakeKey={shake.mobile}
                  onChange={handleChange}
                  autoComplete="tel"
                />

                <AnimatedInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  value={form.password}
                  error={errors.password}
                  shakeKey={shake.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  icon="bi-lock"
                />

                <motion.button
                  type="submit"
                  className="btn btn-primary login-button mt-3 w-100"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.97 } : {}}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Please wait...
                    </>
                  ) : (
                    "Login"
                  )}
                </motion.button>

              </FormFieldset>
            </form>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="login-Footer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <p>
              Don't have an account?{" "}
              <LoadingLink href="/register" loading={loading}>
                Sign Up
              </LoadingLink>
            </p>

            <p>
              <LoadingLink href="/forgot-password" loading={loading}>
                Forgot Password?
              </LoadingLink>
            </p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Login;