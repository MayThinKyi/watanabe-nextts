import React from 'react'

interface Props {
    title: string;
}
const AppTitle = ({ title }: Props) => {
    return (
        <h1 className='mb-8 text-7xl sm:text-9xl font-bebas font-bold'>{title}</h1>
    )
}

export default AppTitle
