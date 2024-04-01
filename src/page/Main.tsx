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
import Header from "../components/header/Header.tsx";
import '../i18n/i18n.tsx'
import {useTranslation} from "react-i18next";

export const Main = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Header />
            <ApparateContextProvider>
                <ChartContextProvider>
                    <Apparate />

                    <Switch />

                    <div className={styles.container}>
                        <Weight />
                        <Chart 
                            label='Тензодатчик'
                            type='WEIGHT'
                            xAxisLabel={t("table.weight")}/>
                        <Table
                            type='WEIGHT'
                            label={t("table.weight")}
                        />

                        <ThermoSensor />
                        <Chart 
                            label='Термодатчик'
                            type='THERMOSENSOR'
                            xAxisLabel={t("table.temperature")}/>
                        <Table
                            type='THERMOSENSOR'
                            label={t("table.temperature")}
                        />

                        <Circles />
                        <Chart 
                            label='Фоторезистор'
                            type='PHOTORESISTOR'
                            xAxisLabel={t('table.square')}/>
                        <Table
                            type='PHOTORESISTOR'
                            label={t('table.square')}
                        />

                    </div>
                </ChartContextProvider>
            </ApparateContextProvider>
        </div>
    )
}
