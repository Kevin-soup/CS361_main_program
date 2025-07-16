import { useState } from "react";
import { Link } from "react-router-dom";
import inventory from "../inventory";
import FilterSearchBar from "../components/FilterSearchBar";
import Table from "../components/Table";

/**
 *  Catalog Page for this application.
 *  Displays product images, codes, prices, and provides filter and search controls.
 * 
 *  @returns Inventory catalog in a table with filter and search controls.
 */
function CatalogPage() {
    const [colorFilter, setColorFilter] = useState("");      // Tracks color filter.
    const [sortOrder, setSortOrder] = useState("");          // Tracks filter.
    const [searchQuery, setSearchQuery] = useState("");      // Tracks search bar.
    const [currentPage, setCurrentPage] = useState(1);       // Tracks catalog page.

    // Clear all filters at once.
    const clearFilters = () => {
        setColorFilter("");
        setSortOrder("");
        setSearchQuery("");
        setCurrentPage(1);
    };

    // Filter by color and search.
    const filteredInventory = inventory.filter(item => {
        const matchesColor = colorFilter ? item.color === colorFilter : true;

        const matchesSearch = searchQuery
        ? item.code.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

        return matchesColor && matchesSearch;
    });

    // Sort by price.
    const sortedInventory = [...filteredInventory];

    if (sortOrder === "priceLowHigh") {
        sortedInventory.sort((a, b) => {

            const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
            const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));

        return priceA - priceB;
        });
        
    } else if (sortOrder === "priceHighLow") {
        sortedInventory.sort((a, b) => {

            const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
            const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));

        return priceB - priceA;
        });
    }

    // Items per page.
    const itemsPerPage = 7;
    const totalPages = Math.ceil(sortedInventory.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedInventory = sortedInventory.slice(startIndex, endIndex);

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };  

    return (
        <div>
            {/* CatalogPage header. */}
            <header className="catalog-header">
                <h1>Catalog</h1>
                <p>Use the filter option to sort by color or price! </p>
            </header>

            {/* Navigation link to HomePage. */}
            <nav>
                <Link to="/"> Home Page </Link>
            </nav>

            {/* Filter and search bar. */}
            <FilterSearchBar
                colorFilter={colorFilter}
                setColorFilter={setColorFilter}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                clearFilters={clearFilters}
            />

            {/* Product table. */}
            <Table inventory={paginatedInventory} />

            {/* Left and right page buttons. */}
            <div className="leftright-nav">
                <button onClick={goToPrevPage} disabled={currentPage === 1}>&#9664; </button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>&#9654; </button>
            </div>
        </div>
    );
}

export default CatalogPage;