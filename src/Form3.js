import { Link } from "react-router-dom";

const Form3 = () => {
    return (
      <div> 
          <h1 className="ml-5 mt-4 mb-4"> signup form</h1>
        <form  className="d-flex flex-column w-50 mx-auto " >
          <label for="pin">pin </label>
          <input type="number" id="pin" placeholder="enter name"></input>
          <label for="email">security email</label>
          <input type="email"></input>
          <textarea name="adress" rows="10" cols="30">
            adrress for eg . house no. 123 street ### city
          </textarea> 
          <Link to="/data">
          <input type="submit" value="Submit"></input> 
          </Link>
        </form>
      </div>
    );
  };
  
  export default Form3;