"use client"

import styles from './plats.module.scss'
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
                    image: '/sample/entree.jpeg',
                },
                {
                    name: 'Salade',
                    price: 8,
                    image: '/sample/entree.jpeg',
                },
                {
                    name: 'Salade',
                    price: 4,
                    image: '/sample/entree.jpeg',
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
                    image: '/sample/plat.jpg',
                },
                {
                    name: 'Mafé',
                    price: 8,
                    image: '/sample/plat.jpg',
                },
                {
                    name: 'Mafé',
                    price: 4,
                    image: '/sample/plat.jpg',
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
                    image: '/sample/dessert.jpg',
                },
                {
                    name: 'Glace',
                    price: 8,
                    image: '/sample/dessert.jpg',
                },
                {
                    name: 'Glace',
                    price: 4,
                    image: '/sample/dessert.jpg',
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
                    image: '/sample/jus.webp',
                },
                {
                    name: 'Fanta',
                    price: 8,
                    image: '/sample/jus.webp',
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
                                <div className={styles.platInfo}>
                                    <div className={styles.platName}>
                                        {plat.name}
                                    </div>
                                    <div className={styles.platPrice}>
                                        {plat.price}€
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}




  

