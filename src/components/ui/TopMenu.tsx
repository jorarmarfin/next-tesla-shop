import Link from "next/link";
import {titleFont} from "@/config/fonts";
import {IoCartOutline, IoSearchOutline} from "react-icons/io5";

export const TopMenu = () => {

    return (
        <nav className='flex px-5 justify-between items-center w-full'>
            <div>
                <Link href='/'>
                    <span className={`${titleFont.className} antialiased font-bold`}>Teslo Shop</span>
                </Link>
            </div>
            {/*Center menu*/}
            <div className='hidden sm:block'>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
                    href='/category/men'>
                    Hombres
                </Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
                      href='/category/womens'>
                    Mujeres
                </Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
                      href='/category/kids'>
                    Kids
                </Link>
            </div>
            {/*Search, cart, Menu*/}
            <div className='flex items-center'>
                <Link href='/search'>
                    <IoSearchOutline className='w-5 h-5'/>
                </Link>
                <Link href='/cart'>
                    <div className='relative'>
                        <span className='absolute text-xs -top-2 -right-2 bg-blue-500 text-white rounded-full p-1'>0</span>
                        <IoCartOutline className='w-5 h-5'/>
                    </div>
                </Link>
                <button className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>
                    Menú
                </button>

            </div>
        </nav>
    )
}