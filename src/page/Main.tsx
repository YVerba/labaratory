import styles from './Main.module.scss';
import { Circles } from "../components/circles/Circles.tsx";
import { Apparate } from '../components/apparate/Apparate.tsx';
import { ApparateContextProvider } from '../components/apparate';
import { ChartContextProvider } from '../components/chart/ChartState.tsx';
import { Chart } from '../components/chart/Chart.tsx';
import { Switch } from "../components/switch/Switch.tsx";
import { Weight } from "../components/weight/Weight.tsx";
import { ThermoSensor } from "../components/thermoSensor/ThermoSensor.tsx";

export const Main = () => {
    return (
        <div>
            <h1 className={styles.title}>Датчики медико-біологічної інформації</h1>
            <ApparateContextProvider>
                <ChartContextProvider>
                    <Apparate />

                    <Switch />

                    <div className={styles.container}>
                        <Weight />
                        <ThermoSensor />
                        <Circles />
                        <Chart 
                            label='Фоторезистор'
                            type='PHOTORESISTOR'/>
                    </div>
                </ChartContextProvider>
            </ApparateContextProvider>
        </div>
    )
}
