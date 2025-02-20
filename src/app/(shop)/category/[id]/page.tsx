import {notFound} from "next/navigation";
import {initialData} from "@/seed/seed";
import {TitleComponent} from "@/components/ui/TitleComponent";
import {ProductsGrid} from "@/components/shop/ProductsGrid";

interface Props {
    params: {
        id: string;
    }
}

export const metadata = {
    title: "Category Page",
    description: "This is the Category page",
}

const products = initialData.products;

export default function CategoryPage({params}: Props) {
    const {id} = params;
    const productsByGender = products.filter(product => product.gender === id);
    if (id === 'kids') {
        notFound();
    }
    return (
        <>
            <TitleComponent
                title="Categoria"
                subtitle={`Productos para ${id}`}
                className='mb-2'
            />
            <ProductsGrid
                products={productsByGender}
            />
        </>
    );
}