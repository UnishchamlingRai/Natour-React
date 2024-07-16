import { useState } from "react";
import { useUser } from "../../context/UserContext";

const UserUpdate = () => {
  const { user } = useUser();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [photo, setPhoto] = useState(user?.photo);

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <form className="form form-user-data">
        <div className="form__group">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="form__input"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__group ma-bt-md">
          <label className="form__label" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            className="form__input"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__group form__photo-upload">
          <img
            className="form__user-photo"
            src="/img/users/user-2.jpg"
            alt="User photo"
          />
          <input
            type="file"
            className="form__upload btn btn-text"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <label className="form__label" htmlFor="photo">
            Choose new photo
          </label>

          {/* <a className="btn-text" href="#">
            Choose new photo
          </a> */}
        </div>
        <div className="form__group right">
          <button className="btn btn--small btn--green">Save settings</button>
        </div>
      </form>
    </div>
  );
};

export default UserUpdate;
