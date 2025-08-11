import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-start">
        <button
          className="btn btn-outline-success btn-lg"
          onClick={() => navigate(-1)}
        >
          ←
        </button>
      </div>
    </div>
  );
};

export default BackBtn;
