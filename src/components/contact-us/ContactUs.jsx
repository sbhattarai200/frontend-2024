import React from "react";
import "./ContactUs.css";
function ContactUs() {
  let [formResponse, setResponse] = React.useState({
    name: "",
    contactNumber: "",
    email: "",
  });
  return (
    <div className="form-wrapper">
      <form onSubmit={(e) => {
            e.preventDefault();
            console.log(formResponse);
      }}>
        <input
          onInput={(e) => {
            formResponse.name = e.target.value;
            setResponse({ ...formResponse });
          }}
          required
          type="text"
          placeholder="Enter your name"
        />
        <input
          onInput={(e) => {
            formResponse.email = e.target.value;
            setResponse({ ...formResponse });
          }}
          required
          type="text"
          placeholder="Enter your email"
        />
        <input
          onInput={(e) => {
            formResponse.contactNumber = e.target.value;
            setResponse({ ...formResponse });
          }}
          required
          type="text"
          placeholder="Enter your phone"
        />
        <button
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}
export default ContactUs;
// import React from "react";
// function ContactUs({ name, onFormSubmitted }) {
//   const [water, setWater] = React.useState("liquid");
//   const [student,setStudent]=React.useState({name:"Sudhir",roll:200})
//   return (
//     <div>
//       <div>
//         {water}
//         <button
//           onClick={() => {
//             setWater(water==="liquid"?"ice":"liquid");
//           }}
//         >
//           Update Water
//         </button>
//         <div>
//             {student.name}
//             {student.roll}
//         </div>
//       </div>
//       {/* This is contact us page for {name}
//         <button onClick={()=>{
//             onFormSubmitted("Ram")
//         }}>
//         click me contact
//         </button> */}
//     </div>
//   );
// }
// export default ContactUs;
