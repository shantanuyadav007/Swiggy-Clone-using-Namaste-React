import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage,areaName, avgRating,totalRatingsString} =
    resInfo?.cards[0]?.card?.card?.info;
  
    const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  //console.log(categories);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  
  return (
    <div className="menu-container mt-5">
    <div className="flex justify-between w-6/12 mx-auto border-b-2">
      <div className="header-contain ">
         <div className="mb-4">
              <div className="">
                  <h2 className="font-medium my-1 text-xl">{name}</h2>
                  <p className="text-gray-500 text-base">{cuisines.join(", ")}</p>
                  <p className=" text-gray-500 text-sm">{areaName}</p>
             </div>
          </div>
        </div>

       <div className="">
          <h5 className="border-2 rounded-md text-sm p-1 ">⭐{avgRating}</h5>
          <h5 className="border-2 rounded-md text-sm p-1 ">{totalRatingsString}</h5>
       </div>
       </div>

             {/*categories accordance*/}
        {categories?.map((category,index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        ))}
      
    </div>
  );
};

export default RestaurantMenu;
