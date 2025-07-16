/**
 * Filter dropdown and search input for CatalogPage.
 *
 * @param {string} colorFilter - Selected color filter.
 * @param {function} setColorFilter - Function to update color filter.
 * @param {string} sortOrder - Selected sort order.
 * @param {function} setSortOrder - Function to update sort order.
 * @param {string} searchQuery - Current search text.
 * @param {function} setSearchQuery - Function to update search text.
 * @param {function} clearFilters - Function to clear all filters.
 * @returns JSX Element.
 */
function FilterSearchBar({
    colorFilter,
    setColorFilter,
    sortOrder,
    setSortOrder,
    searchQuery,
    setSearchQuery,
    clearFilters
    }) {

    return (
        <div className="catalog-controls">
            {/* Filter by color. */}
            <select value={colorFilter} onChange={(e) => setColorFilter(e.target.value)}>
                <option value="">Filter by Color </option>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Other">Colored</option>
            </select>

            {/* Sort order by price. */}
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="">Sort by Price </option>
                <option value="priceLowHigh">Low to High </option>
                <option value="priceHighLow">High to Low </option>
            </select>

            {/* Search bar. */}
            <input
                type="text"
                placeholder="Search by Item: 2160"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Clear all filters. */}
            <button onClick={clearFilters}>Clear Filters </button>
        </div>
    );
}

export default FilterSearchBar;