import Link from 'next/link'
import React from 'react'
import Login from './Login'

const Nav = () =>
{
    return (
        <nav className='flex justify-between items-center py-8'>
            <Link href={'/'}>
                <h1 className='font-bold text-lg'>Send it.</h1>
            </Link>
            <ul>
                <Login />
            </ul>
        </nav>
    )
}

export default Nav