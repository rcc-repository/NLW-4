
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

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

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
                activeChallenge
            }}>
            
            {children}
        </ChallangesContext.Provider>
    )
}





