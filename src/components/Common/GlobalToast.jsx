import { Toaster } from "react-hot-toast";
import "../../styles/Toast.css";

const GlobalToast = () => {
  return (
    <Toaster
      position="bottom-left"
      reverseOrder={false}
      gutter={12}
      toastOptions={{
        duration: 3000,
        removeDelay:100,
      }}
    />
  );
};

export default GlobalToast;