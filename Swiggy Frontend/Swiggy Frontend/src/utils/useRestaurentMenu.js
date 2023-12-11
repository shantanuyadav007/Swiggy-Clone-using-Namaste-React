import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
const useRestaurantMenu = (resId) => {
  // fetch data
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
