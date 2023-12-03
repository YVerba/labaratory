import styles from './Photoresistor.module.css'
import { PhotoresistorPin } from './PhotoresistorPin'

export const Photoresistor = () => {
    return (
        <div>
            <div className={styles.photoresistor}>
                <div className={styles.lens}>
                    <PhotoresistorPin/>
                </div>
            </div>

            <div className={styles.text}>
                Фоторезистор
            </div>
        </div>
    )
}