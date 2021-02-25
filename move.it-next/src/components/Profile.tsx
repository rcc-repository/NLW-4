

import styles from '../styles/components/Profile.module.css'

export function Profile () {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/rcc-repository.png" alt="Rodrigo Costa"/>

            <div>
                <strong> Rodrigo Costa </strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}