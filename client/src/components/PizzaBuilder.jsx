

export const PizzaBuilder = () => {

    const logoutHandler = e => {
        const newUser = {user}
        axios.post('http://localhost:8004/api/logout'), {newUser}
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            }) 
    }

    return(<>
        <h2>Build Your Za!</h2>
        <form>
            <label>
                Method:
                <select name="method">
                    <option value="delivery">Delivery</option>
                    <option value="carryout">Carryout</option>
                </select>
            </label>
            <label>
                Size:
                <select name="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </label>
            <label>
                Crust:
                <select name="crust">
                    <option value="thin">Thin & Crispy</option>
                    <option value="thick">Thick & Sweet</option>
                    <option value="stuffed">Stuffed Crust</option>
                </select>
            </label>
            <label>
                QTY:
                <input type="number" name="quantity"/>
            </label>
            <label>
                Toppings:
                <div>
                    <label><input type="checkbox" name="toppings" value="Pepperoni" placeholder="Pepperoni" />Pepperoni</label>
                    <label><input type="checkbox" name="toppings" value="Sausage" />Sausage</label>
                    <label><input type="checkbox" name="toppings" value="Salami" />Salami</label>
                    <label><input type="checkbox" name="toppings" value="Philly Steak" />Philly Steak</label>
                </div>
            </label>
            <button onClick={logoutHandler}>Logout</button>
        </form>
    </>)
}