import React from 'react'

const Header = () => {
  return (
    <div className="app__header">
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-light">
    
        <form class="form-group row">
      <div class="col-8">
        <input class="form-control mr-sm-2 form-control" type="search" placeholder="Search" aria-label="Search"/>
        </div>
    
        <div class="col-4">
        <button  type="button" class="btn btn-md btn-primary btn-block text-nowrap">Find Weather</button>
    </div>
      </form>
    </nav>   
     </div>
     </div>
     </div>
    
    
    
    
      );
  
}

export default Header
