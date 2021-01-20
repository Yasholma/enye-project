import "./index.scss";
import maleProfile from "../../assets/male.png";
import femaleProfile from "../../assets/female.jpg";

function ProfileModal({ profile, closeProfile }) {
  return (
    <div className="profile-modal" onClick={closeProfile}>
      <div className="profile-modal-body">
        <div className="profile-user">
          <img
            src={profile.Gender === "Male" ? maleProfile : femaleProfile}
            alt="Profile"
            className="profile-user-image"
          />
        </div>

        <div className="row">
          <div className="profile-field">
            <p className="label">Name:</p>
            <p className="value">
              {profile.FirstName} {profile.LastName}
            </p>
          </div>

          <div className="profile-field">
            <p className="label">Gender:</p>
            <p className="value">{profile.Gender}</p>
          </div>
        </div>

        <div className="row">
          <div className="profile-field">
            <p className="label">Username:</p>
            <p className="value">@{profile.UserName}</p>
          </div>

          <div className="profile-field">
            <p className="label">Phone Number:</p>
            <p className="value">{profile.PhoneNumber}</p>
          </div>
        </div>

        <div className="row">
          <div className="profile-field">
            <p className="label">Email:</p>
            <p className="value">{profile.Email}</p>
          </div>
        </div>

        <div className="row">
          <div className="profile-field">
            <p className="label">Url:</p>
            <p className="value">{profile.URL}</p>
          </div>
        </div>

        <div className="row">
          <div className="profile-field">
            <p className="label">Payment Method:</p>
            <p className="value">{profile.PaymentMethod}</p>
          </div>
        </div>

        <div className="row">
          <div className="profile-field">
            <p className="label">Mac Address:</p>
            <p className="value">{profile.MacAddress}</p>
          </div>
        </div>

        <div className="row">
          <div className="profile-field">
            <p className="label">Credit Card:</p>
            <p className="value">
              {profile.CreditCardType} ( {profile.CreditCardNumber} )
            </p>
          </div>
        </div>

        <div className="row">
          <div className="profile-field">
            <p className="label">Last Login:</p>
            <p className="value">
              {profile.LastLogin} from{" "}
              <p className="value">
                ( Lat: {profile.Latitude} &amp; Long: {profile.Longitude} )
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
