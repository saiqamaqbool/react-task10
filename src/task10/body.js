import Profilpic from '../assets/formimage.jpg'


function BodyImage(props){
    
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    props.setSubmitted(true);
  
  
  };

   return(
  <div class="container my-5">
  <div class="d-flex gap-5 min-vh-100">
    <div class="col-6">
      <img src={Profilpic} alt="form image" class="img-fluid" />
    </div>
    <div class="col-6">
      <form onSubmit={handleSubmit}>
        <div class="mb-3 mt-3">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
        </div>
        <div class="mb-3">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>



  );
}
export default BodyImage;

