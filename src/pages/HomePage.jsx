import { Link } from "react-router-dom";
import siteImage from "../assets/SiteImage.webp";


/**
 *  HomePage for this application.
 *
 *  @returns A header, catalog navigation link, site image, contact info, and footer.
 */
function HomePage() {
    return(
    <>
        {/* Hompage header. */}
        <header className="homepage-header">
            <h1>Rainbow Sunglasses </h1>
            <p>Click catalog to see our wide selection of sunglasses! Call our office to place an order! </p>
        </header>

        {/* Navigation link to CatalogPage. */}
        <nav>
            <Link to="/catalog">Catalog </Link>
        </nav>

        {/* Sunglasses image for HomePage. */}
        <img 
            src={siteImage} 
            alt="HomePage Image" 
            className="homepage-image"
        />

        {/* Contact Info. */}
        <section className="contact-info">
            <h2>Contact Info </h2>

            <div className="contact-item">
                <h4>Phone Number </h4>
                <p>(713) 443-9343 </p>
            </div>

            <div className="contact-item">
                <h4>Email </h4>
                <p>rainbowsunglasses@gmail.com </p>
            </div>
        </section>

        {/* Benefits description. */}
        <p className="homepage-benefits">
            Our new online catalog shows the latest up-to-date inventory and eliminates paper waste!
        </p>

        {/* Homepage footer. */}
        <footer>
            <p>&copy; 2025 Kevin Lin</p>        
        </footer>

    </>    
    );
}

export default HomePage;