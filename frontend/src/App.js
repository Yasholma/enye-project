import { useEffect, useState } from "react";
import Paginate, { getField } from "./helpers";
import useFetchProfiles from "./hooks/useFetchProfiles";

import Profile from "./components/profile";
import Header from "./components/header";
import Footer from "./components/footer";
import Pagination from "./components/pagination";

import "./App.scss";
import ProfileModal from "./components/profile-modal";

function App() {
  const { userProfiles, isLoading, error } = useFetchProfiles();
  const [shownData, setShownData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [profile, setProfile] = useState(null);
  const itemsPerPage = 20;

  const genders = getField(userProfiles, "Gender");
  const paymentMethods = getField(userProfiles, "PaymentMethod");

  useEffect(() => {
    setShownData(Paginate(userProfiles, itemsPerPage, currentPage));
  }, [userProfiles, itemsPerPage, currentPage]);

  const selectedPage = (page) => {
    setCurrentPage(page);
    setShownData(Paginate(userProfiles, itemsPerPage, page));
  };

  const showProfile = (profile) => {
    setProfile(profile);
  };

  const closeProfile = () => {
    setProfile(null);
  };

  const handleFilter = ({ target: { value } }) => {
    let filteredByGender;
    if (!!value) {
      filteredByGender = userProfiles.filter(
        (profile) => profile.Gender === value || profile.PaymentMethod === value
      );
    } else {
      filteredByGender = Paginate(userProfiles, itemsPerPage, currentPage);
    }
    setShownData(filteredByGender);
  };

  const handleSearch = ({ target: { value } }) => {
    if (value.length > 2) {
      const searchRes = userProfiles.filter(
        (profile) =>
          profile.FirstName.toLowerCase().includes(value.toLowerCase()) ||
          profile.LastName.toLowerCase().includes(value.toLowerCase())
      );
      setShownData(searchRes);
    } else {
      setShownData(userProfiles);
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="mt main">
        <div className="pagination">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalData={userProfiles.length || 0}
            currentPageCount={shownData.length}
            currentPage={currentPage}
            handlePageClick={(selected) => selectedPage(selected)}
          />
        </div>
        {/* filter */}
        <form>
          <div className="form-field">
            <select
              name="filter_gender"
              id="filter_gender"
              onChange={handleFilter}
            >
              <option value="">Filter by gender</option>
              {genders.length > 0 &&
                genders.map((g, i) => (
                  <option value={g} key={i}>
                    {g}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-field">
            <select
              name="filter_payment_method"
              id="filter_payment_method"
              onChange={handleFilter}
            >
              <option value="">Filter by Payment Method</option>
              {paymentMethods.length > 0 &&
                paymentMethods.map((g, i) => (
                  <option value={g} key={i}>
                    {g}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-field">
            <input
              type="search"
              className="search"
              onChange={handleSearch}
              placeholder="search..."
            />
          </div>
        </form>
        <div className="content">
          {error && (
            <p className="alert-error">
              Sorry, we are unable to get the data at this time
            </p>
          )}
          {!isLoading &&
            shownData.map((p, index) => (
              <Profile profile={p} key={index} showProfile={showProfile} />
            ))}
        </div>

        {profile && (
          <ProfileModal profile={profile} closeProfile={closeProfile} />
        )}

        <div className="pagination">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalData={userProfiles.length || 0}
            currentPageCount={shownData.length}
            currentPage={currentPage}
            handlePageClick={(selected) => selectedPage(selected)}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
