// import  reslist  from "../utils/mockdata";
import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  let [listOfRestaurents, setListofRestraunt] = useState([]);
  const [filterdRestaurant, setfilterdRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7030425&lng=77.430373&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    );
    const json = await data.json();
    const arrayOfCards = json?.data?.cards;
    const restaurant_list = "restaurant_grid_listing";
    // console.log(json);

    // Optional Chaining

    for (const cardObj of arrayOfCards) {
      if (cardObj?.card?.card && cardObj?.card?.card?.id === restaurant_list) {
        const resData =
          cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListofRestraunt(resData);
        setfilterdRestaurant(resData);
      }
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  const { loggedInUser, setUserName } = useContext(UserContext);
  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black rounded-br-sm rounded-sm "
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
       
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterdRestaurant = listOfRestaurents.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText)
              );
              setfilterdRestaurant(filterdRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label> UserName : </label>
          <input
            className="border border-black p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="search m-4 p-8">
          <button
            className="bg-green-100 hover:bg-green-300  text-black font-bold py-2 px-4 rounded-lg  "
            onClick={() => {
              const filteredList = listOfRestaurents.filter(
                (res) => res.info?.avgRating > 4
              );
              setfilterdRestaurant(filteredList);
            }}
          >
            Top rated Restaurent
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterdRestaurant.map((restaurants) => (
          <Link
            key={restaurants?.info.id}
            to={"/restaurants/" + restaurants?.info.id}
          >
            {restaurants?.info.Promoted ? (
              <RestaurentCardPromoted resData={restaurants?.info} />
            ) : (
              <RestaurentCard resData={restaurants?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
