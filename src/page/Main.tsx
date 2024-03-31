// @ts-ignore
import styles from './Main.module.scss';
import { Circles } from "../components/circles/Circles.tsx";
import { Apparate } from '../components/apparate/Apparate.tsx';
import { ApparateContextProvider } from '../components/apparate';
import { ChartContextProvider } from '../components/chart/ChartState.tsx';
import { Chart } from '../components/chart/Chart.tsx';
import { Switch } from "../components/switch/Switch.tsx";
import { Weight } from "../components/weight/Weight.tsx";
import { ThermoSensor } from "../components/thermoSensor/ThermoSensor.tsx";
import {Table} from "../components/table/Table.tsx";

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
                        <Chart 
                            label='Тензодатчик'
                            type='WEIGHT'
                            xAxisLabel='Вага'/>
                        <Table
                            type='WEIGHT'
                            label={'Вага'}
                        />

                        <ThermoSensor />
                        <Chart 
                            label='Термодатчик'
                            type='THERMOSENSOR'
                            xAxisLabel='Температура'/>
                        <Table
                            type='THERMOSENSOR'
                            label={'Температура'}
                        />

                        <Circles />
                        <Chart 
                            label='Фоторезистор'
                            type='PHOTORESISTOR'
                            xAxisLabel='Площа'/>
                        <Table
                            type='PHOTORESISTOR'
                            label={'Площа'}
                        />

                    </div>
                </ChartContextProvider>
            </ApparateContextProvider>
        </div>
    )
}
