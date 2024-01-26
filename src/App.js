import Navigation from "./components/navigation/Navigation";
import About from "./components/about/About";
import ContactUs from "./components/contact-us/ContactUs";
import Meal from "./components/meal/Meal";
import { Route, Routes } from "react-router-dom";
import MealById from "./components/meal/MealById";

//PROPS
function App() {
  const aboutPageTitle = "This is about page";
  //object descturcting
  let obj = { name: "Ram", roll: "200" };
  let { name, roll } = obj;
  console.log(name, roll);
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route
          path="/contact"
          element={
            <ContactUs
              name={"Ram"}
              onFormSubmitted={(value) => {
                console.log(value);
              }}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/meal" element={<Meal />} />
        <Route path="/meals/:mealId" element={<MealById />} />
        <Route path="/" element={<Meal />} />
      </Routes>
    </div>
  );
}

export default App;
