import "./index.scss";

function Profile({ profile, showProfile }) {
  return (
    <div className="col-md-3 p-2">
      <div className="profile">
        <div className="profile__header">
          <p className="profile__username">
            <span className="profile__label profile__label--lighter">
              Username:
            </span>{" "}
            <span className="profile__value">{`@${profile.UserName}`}</span>
          </p>
        </div>

        <div className="profile__body">
          <div className="profile__picture">
            {["Male", "Female"].includes(profile.Gender)
              ? profile.Gender
              : "Others"}
          </div>
          <div className="profile__details">
            <div className="profile__section">
              <span className="profile__label">Name:</span>{" "}
              <span className="profile__value">{`${profile.FirstName} ${profile.LastName}`}</span>
            </div>

            <div className="profile__section">
              <span className="profile__label">Email:</span>{" "}
              <span className="profile__value">{`${profile.Email.toLowerCase()}`}</span>
            </div>

            <div className="profile__section">
              <span className="profile__label">Phone:</span>{" "}
              <span className="profile__value">{`${profile.PhoneNumber}`}</span>
            </div>
          </div>
        </div>

        <div className="profile__footer">
          <button
            type="button"
            className="profile__btn"
            onClick={() => showProfile(profile)}
          >
            view profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
