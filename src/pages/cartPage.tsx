import Layout from "../layout/layout"
import { useCart } from "../providers/cartProvider"

const CartPage = () : JSX.Element => {
    const {cart} = useCart()
    return (
        <Layout>
            {cart.length ? (cart.map((c : any)=> {
                return (
                    <div key={c.id}>
                        {c.name}
               
                    </div>
                )
            })) : ("not")}
        </Layout>
    )
}

export default CartPage