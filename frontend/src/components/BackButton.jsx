import { useNavigate } from "react-router-dom";

function BackButton({ label = "Back", fallback }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else if (fallback) {
      navigate(fallback);
    } else {
      navigate("/"); // 🔒 ultimate safety
    }
  };

  return (
    <button
      type="button" // 🔥 IMPORTANT (avoids form submit issues)
      onClick={handleBack}
      className="flex items-center gap-2 px-4 py-2 rounded-md 
                 border border-gray-300 text-gray-700
                 hover:bg-gray-100 transition"
    >
      ← {label}
    </button>
  );
}

export default BackButton;
