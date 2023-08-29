import Restaurant1 from "../assets/restaurant1.jpg";
import Restaurant2 from "../assets/restaurant2.jpg";
import Restaurant3 from "../assets/restaurant3.jpg";
import Biryani from "../assets/biryani.jpg";
import Dessert1 from "../assets/cream1.jpg";
import Dessert2 from "../assets/cream2.jpg";
import FriedRice from "../assets/friedrice.jpg";
import Idli from "../assets/idli.jpg";
import Parota from "../assets/parota.jpg";
import Poori from "../assets/poori.jpg";
import Rice from "../assets/rice.jpg"

export const restaurantData = [
  {
    id: "1",
    restaurant: "Restaurant1",
    image: Restaurant1,
    itmes: [
      {
        id: "11",
        name: "Item1",
        image: Idli,
        season: "Summer",
        dietry: "Egg_Free",
        type: "Breakfast",
      },
      {
        id: "12",
        name: "Item2",
        image: Biryani,
        season: "Winter",
        dietry: "Gluten_Free",
        type: "Dinner",
      },
      {
        id: "13",
        name: "Item3",
        image: Dessert1,
        season: "Spring",
        dietry: "Dairy_Free",
        type: "Dessert",
      },
      {
        id: "14",
        name: "Item4",
        image: FriedRice,
        season: "Summer",
        dietry: "Dairy_Free",
        type: "Dinner",
      },
      {
        id: "15",
        name: "Item5",
        image: Parota,
        season: "Winter",
        dietry: "Egg_Free",
        type: "Breakfast",
      },
      {
        id: "16",
        name: "Item6",
        image: Rice,
        season: "Summer",
        dietry: "Dairy_Free",
        type: "Dinner",
      },
    ],
  },
  {
    id: "2",
    restaurant: "Restaurant2",
    image: Restaurant2,
    itmes: [
      {
        id: "21",
        name: "Item1",
        image: Dessert2,
        season: "Summer",
        dietry: "Egg_Free",
        type: "Dessert",
      },
      {
        id: "22",
        name: "Item2",
        image: Rice,
        season: "Winter",
        dietry: "Dairy_Free",
        type: "Dinner",
      },
      {
        id: "23",
        name: "Item3",
        image: Parota,
        season: "Spring",
        dietry: "Gluten_Free",
        type: "Breakfast",
      },
      {
        id: "24",
        name: "Item4",
        image: Idli,
        season: "Summer",
        dietry: "Dairy_Free",
        type: "Breakfast",
      },
      {
        id: "25",
        name: "Item5",
        image: FriedRice,
        season: "Winter",
        dietry: "Gluten_Free",
        type: "Dinner",
      },
      {
        id: "26",
        name: "Item6",
        image: Dessert1,
        season: "Summer",
        dietry: "Egg_Free",
        type: "Dessert",
      },
    ],
  },
  {
    id: "3",
    restaurant: "Restaurant3",
    image: Restaurant3,
    itmes: [
      {
        id: "31",
        name: "Item1",
        image: Poori,
        season: "Summer",
        dietry: "Gluten_Free",
        type: "Breakfast",
      },
      {
        id: "32",
        name: "Item2",
        image: Parota,
        season: "Winter",
        dietry: "Egg_Free",
        type: "Breakfast",
      },
      {
        id: "33",
        name: "Item3",
        image: FriedRice,
        season: "Spring",
        dietry: "Dairy_Free",
        type: "Dinner",
      },
      {
        id: "34",
        name: "Item4",
        image: Idli,
        season: "Summer",
        dietry: "Egg_Free",
        type: "Breakfast",
      },
      {
        id: "35",
        name: "Item5",
        image: Dessert1,
        season: "Winter",
        dietry: "Egg_Free",
        type: "Dessert",
      },
      {
        id: "36",
        name: "Item6",
        image: Dessert2,
        season: "Summer",
        dietry: "Gluten_Free",
        type: "Dessert",
      },
    ],
  },
];
