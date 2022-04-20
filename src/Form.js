import Form2 from "./Form2";
import Form3 from "./Form3";
import { Link } from "react-router-dom";
const Form = () => {
  return (
    <div > 
        <h1 className="ml-5 mt-4 mb-4"> Login form</h1>
      <form  className="d-flex flex-column w-50 mx-auto ">
        <label for="fname">first name</label>
        <input type="text" id="fname" placeholder="enter name"></input>
        <label for="lname" placeholder="enter name">
          last name
        </label>
        <input type="text" id="lname"></input>
        <label for="email">email</label>
        <input type="email"></input>
        <textarea name="message" rows="10" cols="30">
          The cat was playing in the garden.
        </textarea> <br></br>
        <Link to="/contact">
        <input type="submit" value="Submit"></input></Link>
      </form> 
      
    </div>
  );
};

export default Form;
