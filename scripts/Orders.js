import { getOrders } from "./database.js"

const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
}

export const ordersMain = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(order => {
        return `<li>
        <input type="radio" name="orders" value="${order.id}" ${order.style}/>
        </li>`
    })

    html += listItems.join(" ")
    html += "</ul>"

    return html
}

