

import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile () {
    const { level } = useContext(ChallangesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/rcc-repository.png" alt="Rodrigo Costa"/>

            <div>
                <strong> Rodrigo Costa </strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}