import Link from 'next/link'
import React from 'react'
import Login from './Login'

const Nav = () =>
{
    return (
        <nav>
            <Link href={'/'}>
                <h1>Send it.</h1>
            </Link>
        </nav>
    )
}

export default Nav