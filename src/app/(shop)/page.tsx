import {ProductsGrid, TitleComponent} from "@/components/components";
import {initialData} from "@/seed/seed";

export const metadata = {
    title: "Shop Page",
    description: "This is the Shop page",
}

const products = initialData.products;

export default function ShopPage() {
    return (
       <>
           <TitleComponent
               title="Tienda"
               subtitle='Todos los Productos'
               className='mb-2'
           />
           <ProductsGrid
            products={products}
           />

       </>
    );
}