

import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges () {
    const { challengesCompleted } = useContext(ChallangesContext);


    return (
            <div className={styles.completedChallengesContainer}>
                <span>Desafios Completos</span>
                <span>{challengesCompleted}</span>
            </div>
        )
}