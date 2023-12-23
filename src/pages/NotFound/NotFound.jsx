import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="notFound">
            <p className="notFound__paragraph1">404</p>
            <p className="notFound__paragraph2">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="notFound__paragraph3">Retourner sur la page d’accueil</Link>
        </div>
  );
}

export default NotFound;
