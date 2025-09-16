import { LoginButton } from "./Button";


function Header(props){
  return(
    <>
    <header>
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
       
  <div class="container-fluid">
    <button type="button" class="btn btn-success ms-auto" onClick={() => props.setShowForm(true)}>
      <LoginButton/>
      </button>
    
  </div>
</nav>
      
     

    </header>
   
    </>
  );
}


export  default Header;