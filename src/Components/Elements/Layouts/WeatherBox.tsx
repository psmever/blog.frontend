import { useState, useEffect, useRef } from 'react';
import { WeatherItem } from 'CommonTypes';
import { RootState } from 'StoreTypes';
import { useSelector } from 'react-redux';
import {
    WeatherTopBox,
    WeatherTimeText,
    WeatherCenterBox,
    WeatherImageBox,
    // WatherImage,
    WeatherTextBox,
    WatherText,
    WeatherFooterBox,
    WeatherDetailTitleText,
    WeatherDetailText,
} from '@Style/WeatherBoxStyles';

// http://www.weather.go.kr/weather/icon_info.html
// https://xetown.com/tips/874593
export default function WeatherBox() {
    const { specialtyWeathersWeathers } = useSelector((store: RootState) => ({
        specialtyWeathersWeathers: store.specialty.weathers.weathers,
    }));

    const [weatherItems, setWeatherItems] = useState<WeatherItem>({
        time: '',
        vilage_name: '',
        sky_icon: '',
        temperature: '',
        sky: '',
        wind: '',
        humidity: '',
    });

    const itemCount = useRef<number>(0);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (itemCount.current < specialtyWeathersWeathers.length - 1) {
                itemCount.current = itemCount.current + 1;
            } else {
                itemCount.current = 0;
            }

            setWeatherItems(specialtyWeathersWeathers[itemCount.current]);
        }, 3000);

        return () => clearInterval(countdown);
    }, [specialtyWeathersWeathers]);

    useEffect(() => {
        setWeatherItems(specialtyWeathersWeathers[0]);
    }, []);

    return (
        <>
            <WeatherTopBox>
                <WeatherTimeText>{`${weatherItems.time} 현재`}</WeatherTimeText>
                <WeatherTimeText>{`${weatherItems.vilage_name}`}</WeatherTimeText>
            </WeatherTopBox>
            <WeatherCenterBox>
                <WeatherImageBox>{/*<WatherImage src={weatherItems.sky_icon} />*/}</WeatherImageBox>
                <WeatherTextBox>
                    <WatherText>{weatherItems.temperature}</WatherText>
                </WeatherTextBox>
                <WeatherTextBox>{/*<WatherText>{weatherItems.sky}</WatherText>*/}</WeatherTextBox>
            </WeatherCenterBox>
            <WeatherFooterBox>
                <WeatherDetailTitleText>현재 바람:</WeatherDetailTitleText>
                <WeatherDetailText>{weatherItems.wind}</WeatherDetailText>
                <WeatherDetailTitleText>현재 습도:</WeatherDetailTitleText>
                <WeatherDetailText>{weatherItems.humidity}</WeatherDetailText>
                {/* <WeatherDetailTitleText>통합 대기:</WeatherDetailTitleText>
                <WeatherDetailText>좋음</WeatherDetailText> */}
            </WeatherFooterBox>
        </>
    );
}
