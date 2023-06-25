import Image from 'next/image'
import styles from './page.module.scss'
import Nav from './components/nav/nav';
import Plats from './components/plats/plats';
import Hours from './components/hours/hours';
import MyGallery from './components/gallery/gallery';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        {/* nav bar for restarant/caterer A propos de nous, Plats, Gallerie, Horaires */}
        <Nav
          logo={
            <a href="#">
              Sama <span>Restaurant</span>
            </a>
          }
          links={
            <>
              <a href="#">A propos de nous</a>
              <a href="#plats">Plats</a>
              <a href="#hours">Horaires</a>
              <a href="#gallery">Gallerie</a>
            </>
          }
          booking={
            <button>Réserver</button>
          }
        />
      </header>
      <main>
        <div className={styles.mainImageContainer}>
          <Image
            src="/sample/main1.jpg"
            alt="Next.js Logo"
            width={500}
            height={500}
            className={styles.mainImage}
          />
          <div className={styles.mainImageText}>
            <h1>
              Sama Restaurant
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae sapien ut libero venenatis faucibus. Nullam quis ante
              tincidunt, ultrices odio vitae, ultrices nisl. Donec euismod
            </p>
          </div>
        </div>
        <div className={styles.container}>
            
            <section id="plats">
              <h2>
                Nos plats
              </h2>
              {/* @ts-expect-error Async Server Component */}
              <Plats />
            </section>
            <section id="hours">
              <h2>
                Nos horaires
              </h2>
              <Hours hours={[
                {
                  day: 'Lundi',
                  open: '10:00',
                  close: '22:00',
                },
                {
                  day: 'Mardi',
                  open: '10:00',
                  close: '22:00',
                },
                {
                  day: 'Mercredi',
                  open: '10:00',
                  close: '22:00',
                },
                {
                  day: 'Jeudi',
                  open: '10:00',
                  close: '22:00',
                },
                {
                  day: 'Vendredi',
                  open: '10:00',
                  close: '22:00',
                },
                {
                  day: 'Samedi',
                  open: '10:00',
                  close: '22:00',
                },
                {
                  day: 'Dimanche',
                  open: '10:00',
                  close: '22:00',
                },
              ]} />
            </section>
            <section id="gallery">
              <h2>
                Notre gallerie
              </h2>
              <MyGallery images={[
                {
                  src: "/sample/plat.jpg",
                  original: "/sample/plat.jpg",
                  width: 250,
                  height: 174,
                  tags: [
                    { value: "Mafé", title: "Mafé" },
                    { value: "Poulet", title: "Poulet" },
                  ],
                  caption: "Mafé au poulet",
                },
                {
                  src: "/sample/dessert.jpg",
                  original: "/sample/dessert.jpg",
                  width: 250,
                  height: 174,
                  tags: [
                    { value: "Mafé", title: "Mafé" },
                    { value: "Poulet", title: "Poulet" },
                  ],
                  caption: "Mafé au poulet",
                },
                {
                  src: "/sample/entree.jpeg",
                  original: "/sample/entree.jpeg",
                  width: 250,
                  height: 174,
                  tags: [
                    { value: "Mafé", title: "Mafé" },
                    { value: "Poulet", title: "Poulet" },
                  ],
                  caption: "Mafé au poulet",
                },
              ]} />
            </section>
          </div>
      </main>
      <footer className={styles.footer}>
          <div className={styles.location}>
            <p>
              Sama Restaurant
            </p>
            <p>
              123 rue de la rue
            </p>
            <p>
              12345 Paris
            </p>
          </div>
          <div className={styles.contact}>
            <p>
              01 23 45 67 89
            </p>
          </div>
        </footer>
    </>
  );
}
