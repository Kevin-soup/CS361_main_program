/**
 *  Displays a table of products: image, code, price.
 *
 *  @param {Array} inventory - Array of filtered inventory items.
 *  @returns Table element.
 */
function Table({ inventory }) {
    return (
        <table>
            <tbody>
                {inventory.map(item => (
                    <tr key={item.id}>
                        <td><img src={item.image} alt={item.code} /></td>
                        <td>{item.code} </td>
                        <td>{item.price} </td>
                    </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;