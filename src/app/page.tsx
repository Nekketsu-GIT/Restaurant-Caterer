import Image from 'next/image'
import styles from './page.module.css'
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
      <div className={styles.container}>
        <main>
          <section>
            <div className={styles.mainImageContainer}>
              <Image
                src="/sample/main1.jpg"
                alt="Next.js Logo"
                width={500}
                height={500}
                className={styles.mainImage}
              />
            </div>
          </section>
          <section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc eget nunc. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc eget nunc. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc eget nunc. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc eget nunc. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc eget nunc. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc eget nunc. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc eget nunc. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc eget nunc. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc eget nunc.
            </p>
          </section>
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
                src: "https://via.placeholder.com/150",
                original: "https://via.placeholder.com/150",
                width: 250,
                height: 174,
                tags: [
                  { value: "Mafé", title: "Mafé" },
                  { value: "Poulet", title: "Poulet" },
                ],
                caption: "Mafé au poulet",
              },
              {
                src: "https://via.placeholder.com/150",
                original: "https://via.placeholder.com/150",
                width: 250,
                height: 174,
                tags: [
                  { value: "Mafé", title: "Mafé" },
                  { value: "Poulet", title: "Poulet" },
                ],
                caption: "Mafé au poulet",
              },
              {
                src: "https://via.placeholder.com/150",
                original: "https://via.placeholder.com/150",
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
        </main>
      </div>
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
