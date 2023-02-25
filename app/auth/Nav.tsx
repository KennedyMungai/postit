import Link from 'next/link'
import React from 'react'

const Nav = async () =>
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