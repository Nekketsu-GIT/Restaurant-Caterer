"use client"

import styles from './plats.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'


async function getPlats() {

    return [
        {
            name: 'Entrées',
            id : 1,
            plats: [
                {
                    name: 'Salade',
                    price: 5,
                    image: 'https://via.placeholder.com/500x500',
                },
                {
                    name: 'Salade',
                    price: 8,
                    image: 'https://via.placeholder.com/500x500',
                },
                {
                    name: 'Salade',
                    price: 4,
                    image: 'https://via.placeholder.com/500x500',
                },
            ]
        },
        {
            name: 'Plats',
            id : 2,
            plats: [
                {
                    name: 'Mafé',
                    price: 5,
                    image: 'https://via.placeholder.com/500x500',
                },
                {
                    name: 'Mafé',
                    price: 8,
                    image: 'https://via.placeholder.com/500x500',
                },
                {
                    name: 'Mafé',
                    price: 4,
                    image: 'https://via.placeholder.com/500x500',
                },
            ]
        },
        {
            name: 'Desserts',
            id : 3,
            plats: [
                {
                    name: 'Glace',
                    price: 5,
                    image: 'https://via.placeholder.com/500x500',
                },
                {
                    name: 'Glace',
                    price: 8,
                    image: 'https://via.placeholder.com/500x500',
                },
                {
                    name: 'Glace',
                    price: 4,
                    image: 'https://via.placeholder.com/500x500',
                },
            ]
        },
        {
            name: 'Boissons',
            id : 4,
            plats: [
                {
                    name: 'Coca',
                    price: 5,
                    image: 'https://via.placeholder.com/500x500',
                },
                {
                    name: 'Fanta',
                    price: 8,
                    image: 'https://via.placeholder.com/500x500',
                },
            ]
        }
    ]
}

export default async function Plats() {


    const categories = await getPlats()



    if (!categories) {
        return <div>Chargement...</div>
    }

    return (
        <div className={styles.plats}>
            {categories.map((category) => (
                <div key={category.id} className={styles.category}>
                    <h3>{category.name}</h3>
                    <div className={styles.platsContainer}>
                        {category.plats.map((plat) => (
                            <div key={plat.name} className={styles.plat}>
                                <div className={styles.platImage}>
                                    <Image
                                        src={plat.image}
                                        alt={plat.name}
                                        fill
                                    />
                                </div>
                                <div className={styles.platName}>
                                    {plat.name}
                                </div>
                                <div className={styles.platPrice}>
                                    {plat.price}€
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}




  

