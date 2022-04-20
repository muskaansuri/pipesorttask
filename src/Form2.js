import { Link } from "react-router-dom";

const Form2 = () => {
    return (
      <div> 
          <h1 className="ml-5 mt-4 mb-4"> Contact form</h1>
        <form className="d-flex flex-column w-50 mx-auto ">
          <label for="country" className="mb-3">country</label>
          <input type="text" id="country" placeholder="enter country"></input>
          <label for="city" placeholder="enter city " className="mb-3">
            city
          </label>
          <input type="text" id="lname" ></input>
          <label for="email" className="mb-3">enter your linked in sddress</label>
          <input type="email" className="mb-3"></input>
          <textarea name="explain in 30 words the best book you have read" rows="10" cols="30">
            eg. harry potter
          </textarea> 
          <Link to="/signup">
          <input type="submit" className="mb-3" value="Submit"></input></Link>
        </form>
      </div>
    );
  };
  
  export default Form2;