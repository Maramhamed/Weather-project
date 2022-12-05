import React , {useState}from 'react'
import axios from 'axios'


const Header = () => {
 const [search, setSearch] = useState("")

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  
  function OnSubmit(){
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=df0eb5014a1e6bbafcbf7857f9e967e9`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="app__header">
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-light">
    
        <form className="form-group row">
      <div className="col-8">

      <input
      value={search}
      onChange={handleSearchChange}
        className="form-control mr-sm-2 form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </div>        
    
        <div class="col-4">
        <button  onClick={OnSubmit}
        type="button" class="btn btn-md btn-primary btn-block text-nowrap">Find Weather</button>
    </div>
      </form>
    </nav>   
     </div>
     </div>
     </div>
    
    
    
    
      );
  
}

export default Header
