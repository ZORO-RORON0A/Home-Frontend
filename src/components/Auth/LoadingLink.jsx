const LoadingLink = ({
  href = "#",
  loading = false,
  children,
  className = "",
  ...props
}) => {
  return (
    <a
      href={href}
      className={`${className} ${loading ? "disabled-link" : ""}`.trim()}
      aria-disabled={loading}
      tabIndex={loading ? -1 : 0}
      onClick={(e) => {
        if (loading) {
          e.preventDefault();
          return;
        }

        props.onClick?.(e);
      }}
      {...Object.fromEntries(
        Object.entries(props).filter(([key]) => key !== "onClick")
      )}
    >
      {children}
    </a>
  );
};

export default LoadingLink;