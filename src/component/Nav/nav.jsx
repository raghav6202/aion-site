import "./nav.css"

const Nav = () =>
{


    return(
        <div>
<header className="nav-header">
<nav className="nav-bar">

<div className="nav-logo-name">
            <img className="company-logo" src="images/aionLogo.png" alt="logo" />
           
        </div>


        <div className="nav-components">
<a className="nav-links active" to="/login" > Product </a>
<a className="nav-links active" to="/wishlist" > Technology </a>
<a className="nav-links active" to="/cart" > Contact </a>  
<a className="nav-links active" to="/cart" > Company </a>  
<a className="login"  to="/cart" > Login</a>            

        </div>

</nav>
</header>
        </div>
    )
}

export {Nav}