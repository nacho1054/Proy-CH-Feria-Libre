const productsList = [
    {
        id: "0",
        idItem: "0",
        categoryId: "Vehiculos",
        title: "VW Polo 2009",
        photo: "https://http2.mlstatic.com/D_NQ_NP_615104-MLA51760612270_092022-W.jpg",
        description: "VW Polo Classic 2009 diesel.",
        stock: 1,
        price: "$1780000",
    },
    {
        id: "1",
        idItem: "1",
        categoryId: "Inmuebles",
        title: "Casa 5 habitaciones",
        photo: "https://http2.mlstatic.com/D_NQ_NP_140111-MLA20449384704_102015-O.jpg",
        description: "Casa grande con pileta y amplio parque.",
        stock: 1,
        price: "U$A690000",
    },
    {
        id: "2",
        idItem: "2",
        categoryId: "Supermercado",
        title: "Fideos terrabusi",
        photo: "https://www.molinos.com.ar/wp-content/uploads/2020/06/tirabuzon_terabussi_productos-1.jpg.webp",
        description: "Fideos tirabuzón Terrabusi x500g.",
        stock: 645,
        price: "$199",
    },
    {
        id: "3",
        idItem: "3",
        categoryId: "Tecnologia",
        title: "PS5",
        photo: "https://blog.latam.playstation.com/tachyon/sites/3/2022/09/4d2e6098c3d5edb2c8d4d591c3b3aaf80a4cccdc.jpg?resize=1088%2C612&crop_strategy=smart",
        description: "Consola Play Station 5.",
        stock: 25,
        price: "$360000",
    },
    {
        id: "4",
        idItem: "4",
        categoryId: "Hogar y Muebles",
        title: "Maceta piramide",
        photo: "https://viveroagronomia.com.ar/wp-content/uploads/2020/12/piramidal-maceta-fibrocemento-vivero-agronomia.jpg",
        description: "Maceta piramidal de cemento.",
        stock: 60,
        price: "$1650",
    },
    {
        id: "5",
        idItem: "5",
        categoryId: "Electrodomesticos",
        title: "Lavarropas Samsung",
        photo: "https://http2.mlstatic.com/D_NQ_NP_796779-MLA48818525783_012022-O.jpg",
        description: "Lavarropas de carga frontal color gris.",
        stock: 5,
        price: "$118000",
    },
    {
        id: "6",
        idItem: "6",
        categoryId: "Herramientas",
        title: "Destornilladores Stanley",
        photo: "https://http2.mlstatic.com/D_NQ_NP_110115-MLA25200493278_122016-O.jpg",
        description: "Kit de destornilladores manueles.",
        stock: 23,
        price: "$12700",
    },
    {
        id: "7",
        idItem: "7",
        categoryId: "Construccion",
        title: "Perfiles T",
        photo: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/207/902/products/perfil_t_211-f268df751b2513659715984430199648-640-0.jpg",
        description: "Perfiles de hierro 3/4 x 1/8 tipo T.",
        stock: 123,
        price: "$2640",
    },
    {
        id: "8",
        idItem: "8",
        categoryId: "Deportes y Fitness",
        title: "Camiseta Newell`s",
        photo: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc73dbb89/products/GV_NOB22010110121/GV_NOB22010110121-1.JPG",
        description: "Camiseta oficial Newell`s temp. 2022.",
        stock: 40000,
        price: "$13099",
    },
    {
        id: "9",
        idItem: "9",
        categoryId: "Otros",
        title: "Silla para bebe",
        photo: "https://images.fravega.com/f300/c5bd742e335fcab2a76834660f6b6d65.jpg.webp",
        description: "Silla plastica portatil color verde.",
        stock: 4,
        price: "$11790",
    },
    {
        id: "10",
        idItem: "10",
        categoryId: "Vehiculos",
        title: "Ford Focus 2001",
        photo: "https://rodatiautos.ar/images/listings/2022-11/d66460fd-1668082758-802.jpg",
        description: "Ford Focus Ghia 2.0 naftero full",
        stock: 1,
        price: "$750000",
    }
]

export const getProductByID = (id) => {
    return productsList[id];
}

export default productsList;