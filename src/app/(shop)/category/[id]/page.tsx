import {notFound} from "next/navigation";

interface Props{
    params:{
        id:string;
    }
}

export const metadata = {
    title: "Category Page",
    description: "This is the Category page",
}
export default function CategoryPage({params}:Props) {
    const {id} = params;
    if(id === 'kids'){
        notFound();
    }
    return (
       <>
        <h1>Category Page</h1>
       </>
    );
}