import {titleFont} from "@/config/fonts";
import Link from "next/link";
import Image from "next/image";

export const NotFoundComponent = () => {

    return (
        <div className='flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle'>
            <div className='text-center px-5 mx-5'>
                <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
                <p className='font-semibold text-xl'>Whoops! Lo sentimos mucho.</p>
                <p className='font-light'>
                    <span>La página que buscas no existe o ha sido movida.</span>
                    <Link href='/'
                          className='font-normal hover:underline transition-all'> Regresar al inicio</Link>
                </p>
            </div>
            <div className='px-5 mx-5'>
                <Image src="/imgs/starman_750x750.png" alt='Starman' className='p-5 sm:p-0' width={300} height={300}/>

            </div>
        </div>
    )
}