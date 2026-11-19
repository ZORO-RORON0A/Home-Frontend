import toast from "react-hot-toast";

const ToastCard = ({ type, title, message, duration }) => {
  const icons = {
    success: "bi-check-circle-fill",
    error: "bi-x-circle-fill",
    warning: "bi-exclamation-triangle-fill",
    info: "bi-info-circle-fill",
  };

  return (
    <div
      className={`app-toast toast-${type}`}
      style={{ "--toast-duration": `${duration}ms` }}
    >
      <div className="toast-background-fill" />

      <div className="toast-icon">
        <i className={`bi ${icons[type]}`} />
      </div>

      <div className="toast-content">
        <h6>{title}</h6>
        <p>{message}</p>
      </div>
    </div>
  );
};

const showToast = (type, title, message, duration = 3000) =>
  toast.custom(
    () => (
      <ToastCard
        type={type}
        title={title}
        message={message}
        duration={duration}
        
      />
    ),
    {
      duration,
      position: "bottom-right",
    }
  );

export const notify = {
  success: (message, title = "Success", duration = 3000) =>
    showToast("success", title, message, duration),

  error: (message, title = "Something went wrong", duration = 3000) =>
    showToast("error", title, message, duration),

  warning: (message, title = "Warning", duration = 3000) =>
    showToast("warning", title, message, duration),

  info: (message, title = "Information", duration = 3000) =>
    showToast("info", title, message, duration),
};