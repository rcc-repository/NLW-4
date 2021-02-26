
import { createContext, useState, ReactNode } from 'react';

interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number; 
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

    function startNewChallenge(){

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
                levelUp 
            }}>
            
            {children}
        </ChallangesContext.Provider>
    )
}





