import { CDN_URL } from "../utils/constant";

const RestaurentCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    locality
  } = resData;

  return (
    <div data-testid="resCard"
    className="ml-10 h- p-4  w-64 hover:shadow-2xl flex flex-col   rounded-lg ">
      <img
       className="rounded-md overflow-hidden min-h-[180px] h-20 object-cover overlay"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg"> {name}</h3>
      <h4 className="text-base truncate ">{cuisines.join(",")}</h4>
     
      <h4>{costForTwo} </h4>
      <h4 className="text-base truncate ">📍{locality}</h4>
      <h4>{deliveryTime} minutes</h4> 
      <h4>{avgRating} ⭐</h4>
    </div>
  );
};

//higher Order component
//input -restaurent card
//output is restaurant card promoted

export const withPromotedLabel=(RestaurentCard)=>{
    return(props)=>{
      return(
         <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestaurentCard {...props}/>
         </div>
      );
    };
};
export default RestaurentCard;
