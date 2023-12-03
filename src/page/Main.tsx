import styles from './Main.module.scss';
import { Circles } from "../components/circles/Circles.tsx";
import { Apparate } from '../components/apparate/Apparate.tsx';
import { ApparateContextProvider } from '../components/apparate';
import { ChartContextProvider } from '../components/chart/ChartState.tsx';
import { Chart } from '../components/chart/Chart.tsx';

export const Main = () => {
    return (
        <div>
            <h1 className={styles.title}>Датчики медико-біологічної інформації</h1>
            <ApparateContextProvider>
                <ChartContextProvider>
                    <Apparate />

                    <div className={styles.container}>
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
