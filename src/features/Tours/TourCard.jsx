import { Link } from "react-router-dom";

function TourCard({ tour }) {
  const { name, imageCover, difficulty, duration, summary } = tour || {};

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img
            src={`/img/tours/${imageCover}`}
            alt="Tour 1"
            className="card__picture-img"
          />
        </div>

        <h3 className="heading-tertirary">
          <span>{name && name}</span>
        </h3>
      </div>

      <div className="card__details">
        <h4 className="card__sub-heading">
          {" "}
          {`${difficulty} ${duration}-day tour`}
        </h4>
        <p className="card__text">{summary}</p>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="/img/icons.svg#icon-map-pin"></use>
          </svg>
          <span>Banff, Canada</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="/img/icons.svg#icon-calendar"></use>
          </svg>
          <span>April 2021</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="img/icons.svg#icon-flag"></use>
          </svg>
          <span>3 stops</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="/img/icons.svg#icon-user"></use>
          </svg>
          <span>25 people</span>
        </div>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">$297</span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">4.9</span>
          <span className="card__footer-text">rating (21)</span>
        </p>
        {/* <a href="#" className="btn btn--green btn--small">
          Details
        </a> */}
        <Link to={"tour/123"} className="btn btn--green btn--small">
          Details
        </Link>
      </div>
    </div>
  );
}

export default TourCard;
