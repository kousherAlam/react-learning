import React from 'react'

export default function ProfileCard() {
    const imgLink = 'https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg';
    return (
        <div>
            <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={imgLink} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500">
                            Sarah Dayan
                        </div>
                        <div className="text-gray-700">
                            Staff Engineer, Algolia
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}
