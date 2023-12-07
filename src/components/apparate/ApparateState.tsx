import { createContext, useContext, useState } from "react"
import { CircleWeight } from "../weight/Weight"

const ThermalSensorSizes = [
    'SMALL',
    'MEDIUM',
    'LARGE'
] as const 

export type ThermalSensorSize = typeof ThermalSensorSizes[number] | null

export interface ApparateState {
    enabled: boolean
    setEnabled: (enabled: boolean) => void

    voltage: number
    setVoltage: (voltage: number) => void

    currentToggle: number
    setCurrentToggle: (currentToggle: number) => void

    thermalSensorSize: ThermalSensorSize
    setThermalSensorSize: (thermalSensorSize: ThermalSensorSize) => void

    circleWeights: CircleWeight[]
    setCircleWeights: (circleWeights: CircleWeight[]) => void
}

const ApparateContext = createContext<ApparateState>({
    enabled: false,
    setEnabled: () => {},

    voltage: 0,
    setVoltage: () => {},

    currentToggle: 0,
    setCurrentToggle: () => {},

    thermalSensorSize: null,
    setThermalSensorSize: () => {},

    circleWeights: [],
    setCircleWeights: () => {},
})

export interface ApparateContextProviderProps {
    children: React.ReactNode
}

export const ApparateContextProvider = (props: ApparateContextProviderProps) => {
    const [enabled, setEnabled] = useState(false)
    const [voltage, setVoltage] = useState(0)
    const [currentToggle, setCurrentToggle] = useState(0)
    const [thermalSensorSize, setThermalSensorSize] = useState<ThermalSensorSize>(null)
    const [circleWeights, setCircleWeights] = useState<number[]>([])

    const value: ApparateState = { 
        enabled,
        setEnabled,

        voltage, 
        setVoltage, 

        currentToggle, 
        setCurrentToggle, 

        thermalSensorSize, 
        setThermalSensorSize,

        circleWeights,
        setCircleWeights,
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
