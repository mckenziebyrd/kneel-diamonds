import { getMetals, getOrders, getSizes, getStyles } from "./database.js"



// Remember that the function you pass to find() must return true/false

const buildOrderListItem = (order) => {
    const metals = getMetals()
    const styles = getStyles()
    const sizes = getSizes()
    
    let totalCost = 0

    const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
const foundStyles = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)
const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)

totalCost = foundMetal.price + foundStyles.price + foundStyles.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

// `<li>
//     Order #${order.id} cost ${costString}
// </li>`

    return `<li>
        Order #${order.id} was placed on ${new Date(order.timestamp)} cost ${costString}
    </li>`
}

export const ordersMain = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()
    

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join(" ")
    html += "</ul>"

    return html
}


