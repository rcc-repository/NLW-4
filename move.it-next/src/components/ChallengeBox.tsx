

import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox () {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallangesContext);

    return (
            <div className={styles.challengeBoxContainer}>
                { activeChallenge ? (
                    <div className={styles.challengeBoxActive}>
                        <header>Ganhe { activeChallenge.amount }</header>

                        <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                            <strong>Novo desafio</strong>
                            <p> { activeChallenge.description } </p>
                        </main>

                        <footer>
                            <button 
                                type="button"
                                className={styles.challengeFailedfButton}
                                onClick={resetChallenge}
                            >
                                Falhei
                            </button>


                            <button 
                                type="button"
                                className={styles.challengeSucceedeButton}
                                onClick={completeChallenge}
                            >
                                Completei
                            </button>
                        </footer>
                    </div>
                ) : (
                    <div className={styles.challengeBoxNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up"/>
                            Avance de level completando desafios.
                        </p>
                    </div>
                ) 
            }
            </div>
        )
}