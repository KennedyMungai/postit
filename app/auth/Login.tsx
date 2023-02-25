'use client'

import { signIn } from 'next-auth/react'

const Login = () =>
{
    return (
        <li className='list-none'>
            <button className="text-sm">
                Sign In
            </button>
        </li>
    )
}

export default Login