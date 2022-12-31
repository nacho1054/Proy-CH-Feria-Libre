import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore'

let allwaysTrue = true;

/* const FetchItem = (delay, task) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            allwaysTrue ? resolve(task) : reject("Error fetching product")
        }, delay);
    })
} */

const fetchItems = async () => {
    const db = getFirestore()
    const productsCollection = collection(db, 'products')

    const productsSnapshot = await getDocs(productsCollection)

    return productsSnapshot.docs
}

export const fetchSingleItem = async (itemId) => {
    const db = getFirestore()
    const productRef = doc(db, 'products', itemId)
    const itemSnapshot = await getDoc(productRef)

    if (!itemSnapshot.exists()) {
        throw new Error("item doesn't exist")
    }

    return { id: itemSnapshot.id, ...itemSnapshot.data() }
}

/*
export const fetchItemByCategory = async () => {
    const db = getFirestore()
    const productsCollection = collection(db, 'products')

        let q;
        if(idCategory) {
            q = query(collection(db, 'products'), where('categoryId', '==', idCategory))
        } else {
            const q = query(collection(db, "products"));
        }
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
        }))
        return dataFromFirestore;
    }

after class 00:48:00
*/

export default fetchItems;


 