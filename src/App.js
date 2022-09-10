import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Food",
      subtitle: "Order Now",
      imageUrl: "https://i.ibb.co/qJVxzxW/kirby-cookies.jpg",
    },
    {
      id: 2,
      title: "Recipes",
      subtitle: "Learn More",
      imageUrl: "https://i.ibb.co/jWLft92/anime-recipe.jpg",
    },
    {
      id: 3,
      title: "Restaurants",
      subtitle: "Travel Around",
      imageUrl: "https://i.ibb.co/j638wdg/beetle-house.jpg",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
