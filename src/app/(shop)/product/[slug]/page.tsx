import {initialData} from "@/seed/seed";
import {notFound} from "next/navigation";
import {titleFont} from "@/config/fonts";
import {QuantitySelector, SizeSelector} from "@/components/components";

export const metadata = {
    title: "Product Page",
    description: "This is the Product page",
}

interface Props {
    params:{
        slug: string;
    }
}

export default async function ProductPage({params}: Props) {
    const {slug} = await params;
    const product = initialData.products.find((product) => product.slug === slug);
    if(!product){
        notFound();
    }

    return (
       <div className='mt-5 mb-20 grid md:grid-cols-3 gap-3'>
           {/*Slideswho*/}
           <div className='col-span-1 md:col-span-2'>
               imagen
           </div>
           {/*Details*/}
           <div className='col-span-1 px-5'>
               <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
                   {product.title}
               </h1>
               <p className='text-lg mb-5'>{product.price}</p>
               <SizeSelector selectedSize={product.sizes[0] } availableSizes={product.sizes} />
               {/*selector cantidad*/}
               <QuantitySelector quantity={2} />
               <button className='btn-primary my-5'>
                   Agregar al carrito
               </button>
               {/*DEscripcion*/}
               <h3 className='font-bold text-sm'>Descripción</h3>
               <p className='font-light'>
                   {product.description}
               </p>
           </div>
       </div>
    );
}