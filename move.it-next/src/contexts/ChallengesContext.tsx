
import { createContext, useState, ReactNode } from 'react';

import challenges from '../../challenges.json';

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number; 
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    resetChallenge: () => void; 
    startNewChallenge: () => void; 
    levelUp: () => void;
}

interface ChallengesProviderProps{
    children: ReactNode;
}

export const ChallangesContext = createContext({} as ChallengesContextData);

export function ChallangesProvider({ children }: ChallengesProviderProps){
    const [currentExperience, setCurrentExperience] = useState(0);
    const [level, setLevel] = useState(1);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }
    
    function levelUp(){
      setLevel(level + 1);
    }

    return (
        <ChallangesContext.Provider 
            value={{ 
                level, 
                currentExperience, 
                challengesCompleted, 
                startNewChallenge, 
                levelUp,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel
            }}>
            
            {children}
        </ChallangesContext.Provider>
    )
}





