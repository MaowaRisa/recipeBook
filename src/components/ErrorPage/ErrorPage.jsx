import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div className="text-center items-center py-4">
            <h1 className="text-lg font-bold text-red-700">Oops!</h1>
            <p>Sorry! An unexpected error has occurred!</p>
            <p>{error.statusText || error.message}</p>
            <button className="p-2 bg-slate-400 text-white rounded-lg" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;