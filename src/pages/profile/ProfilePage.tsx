import React from 'react'
import ProductCard from '../tailwind/ProductCard'
import ProfileCard from '../tailwind/ProfileCard'

export const ProfilePage = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold underline mb-4 mt-4'>Profile Page</h1>

            <div className="mt-4">
                <ProfileCard />
            </div>

            <div className="grid md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-3 mt-4">
                <div className="prod-card"><ProductCard /></div>
                <div className="prod-card"><ProductCard /></div>
                <div className="prod-card"><ProductCard /></div>
            </div>
        </div>
    )
}
