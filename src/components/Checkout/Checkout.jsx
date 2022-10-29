import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import "./Checkout.css"
import { Link } from "react-router-dom"
import { NotificationContext } from '../../Notification/Notification'



const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const { setNotification } = useContext(NotificationContext)
    const [ticket, setTicket] = useState("")

    const setearNombre = (e)=>{
        setNombre(e.target.value)
    }
    const setearEmail = (e) =>{
        setEmail(e.target.value)
    }
    const setearTelefono = (e) =>{
        setTelefono(e.target.value)
     }

    const handleNotification= async (e) => {
        setNotification('success', `Compra exitosa Id: ${e}`)
    } 
    const handleTicket= async (e) => {
        setTicket(e)
    } 

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async () => {

        if (nombre === "" || email === "" || telefono === "") {
            return alert("Complete los campos")
        }

        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: nombre,
                    phone: email,
                    email: telefono
                },
                items: cart,
                total
            }
    
            console.log(objOrder)
    
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                await handleNotification(orderAdded.id)
                await handleTicket(orderAdded.id)
                console.log(`El id de su orden es: ${orderAdded.id}`)
                console.log("564"+orderAdded)
                clearCart()
            } else {
                alert('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    
    if(loading) {
        return <h1 className='titulo'>Su orden se esta generando...</h1>
    } 

    return ( 
            <>
                <h1 className='titulo'>Checkout</h1>
                <div className='divContainerCheckout'>
                    <form className='fromCheckout' onSubmit={createOrder}>
                        <label className="labelForm">Nombre:
                            <input className="inputForm" name="Nombre" type="text" value={nombre} onChange={setearNombre}/>
                        </label>
                        <label className="labelForm">E-mail:
                            <input className="inputForm" name="Email"type="email" value={email} onChange={setearEmail}/>
                        </label>
                        <label className="labelForm">Telefono:
                            <input className="inputForm" name="Telefono" type="phone" value={telefono} onChange={setearTelefono}/>
                        </label>
                    </form>
                    <div className="navegacionCheckout">
                        <Link className="volverAlCart" to="/cart">Volver</Link>
                        
                    </div>
                    <div>
                        {
                            ticket === "" ? (
                                <button className="compra" onClick={createOrder}>Comprar</button>
                            ) : (
                                <Link className='recibirTiket' to='/ticket' >Recibir Ticket</Link>
                            )
                        }
                        
                    </div>
                </div>
            </>
    )
}

export default Checkout