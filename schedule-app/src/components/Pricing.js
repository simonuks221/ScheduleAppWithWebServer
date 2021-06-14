const Pricing = ({pricing}) => {
    
    const setupPricing = () => {
        const allTable = []
        pricing.forEach((price) => {
            allTable.push(<tr key = {price.ID}>
                <th scope = 'row'>{price.Description}</th>
                <th>{price.Price}</th>
            </tr>)
        })
        return allTable
    }

    return (
        <div className = 'pricing rounded py-5 mx-3'>
            <div className = 'container-fluid row'>
                <div className = 'col-md-2'>
                    <div className = 'mx-2'>
                        <h2>Price text</h2>
                        <p>Description of prices on the right side</p>
                    </div>
                </div>
                <div className = 'col-md-10'>
                    <table className = 'table'>
                        <thead>
                            <tr>
                                <th scope = 'col'>Description</th>
                                <th scope = 'col'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {setupPricing()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Pricing
