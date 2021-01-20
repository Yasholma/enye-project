import { useEffect, useRef, useState } from "react";
import axios from "axios";

const useFetchProfiles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userProfiles, setUserProfiles] = useState([]);
  const [error, setError] = useState(null);
  const _isMounted = useRef(true);

  useEffect(() => {
    const fetchUserProfiles = async () => {
      setIsLoading(true);
      try {
        const {
          data: {
            records: { profiles },
          },
        } = await axios.get("https://api.enye.tech/v1/challenge/records");

        if (_isMounted) setUserProfiles(profiles);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfiles();

    return () => {
      _isMounted.current = false;
    };
  }, []);

  return { userProfiles, error, isLoading };
};

export default useFetchProfiles;
