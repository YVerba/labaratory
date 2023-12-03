import { createContext, useContext, useState } from "react"

const ThermalSensorSizes = [
    'SMALL',
    'MEDIUM',
    'LARGE'
] as const 

export type ThermalSensorSize = typeof ThermalSensorSizes[number] | null

export interface ApparateState {
    voltage: number
    setVoltage: (voltage: number) => void

    currentToggle: number
    setCurrentToggle: (currentToggle: number) => void

    thermalSensorSize: ThermalSensorSize
    setThermalSensorSize: (thermalSensorSize: ThermalSensorSize) => void
}

const ApparateContext = createContext<ApparateState>({
    voltage: 0,
    setVoltage: () => {},
    currentToggle: 0,
    setCurrentToggle: () => {},
    thermalSensorSize: null,
    setThermalSensorSize: () => {}
})

export interface ApparateContextProviderProps {
    children: React.ReactNode
}

export const ApparateContextProvider = (props: ApparateContextProviderProps) => {
    const [voltage, setVoltage] = useState(0)
    const [currentToggle, setCurrentToggle] = useState(0)
    const [thermalSensorSize, setThermalSensorSize] = useState<ThermalSensorSize>(null)
    const value: ApparateState = { 
        voltage, 
        setVoltage, 

        currentToggle, 
        setCurrentToggle, 

        thermalSensorSize, 
        setThermalSensorSize
    }

    return (
        <ApparateContext.Provider value={value}>
            {props.children}
        </ApparateContext.Provider>
    )
}

export const useApparateContext = () => {
    return useContext(ApparateContext)
}
