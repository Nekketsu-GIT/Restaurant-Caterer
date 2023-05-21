import styles from './hours.module.css';
import Image from 'next/image';

interface HoursProps {
    hours: {
        day: string,
        open: string,
        close: string,
    }[]
}

export default function Hours({ hours }: HoursProps) {
    return (
        <div className={styles.hours}>
            <div className={styles.hoursContainer}>
                {hours.map((hour) => (
                    <div key={hour.day} className={styles.hour}>
                        {hour.day} : {hour.open} - {hour.close}
                    </div>
                ))}
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src="https://via.placeholder.com/500x500"
                    alt="Hours"
                    fill
                    className={styles.image}
                />
            </div>
        </div>
    )
}