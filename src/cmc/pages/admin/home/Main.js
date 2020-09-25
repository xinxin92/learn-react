import React from 'react'
import AdminRouter from '../../../routers/AdminRouter'
import Home from './Home'

function Main() {
    return (
        <div>
            <Home>
                <AdminRouter></AdminRouter>
            </Home>
        </div>
    )
}

export default Main
