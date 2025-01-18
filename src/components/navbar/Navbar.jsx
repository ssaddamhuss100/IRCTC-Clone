
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <h1>IRCTC</h1>
        </div>
      <div className="navMenu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
       </ul>
    </div>
    
     
    </div>
  )
}

export default Navbar
