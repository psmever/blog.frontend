import React from 'react';
import {
    WeatherTopBox,
    WeatherTimeText,
    WeatherCenterBox,
    WeatherImageBox,
    WatherImage,
    WeatherTextBox,
    WatherText,
    WeatherFooterBox,
    WeatherDetailTextBox,
    WeatherDetailTitleText,
    WeatherDetailText,
} from '@Style/RightWeatherBoxStyles';

// http://www.weather.go.kr/weather/icon_info.html
// https://xetown.com/tips/874593
export default function RightWeatherBox() {
    return (
        <>
            <WeatherTopBox>
                <WeatherTimeText>08:00 현재</WeatherTimeText>
            </WeatherTopBox>
            <WeatherCenterBox>
                <WeatherImageBox>
                    <WatherImage src="http://www.weather.go.kr/images/icon/NW/NB01.png" />
                </WeatherImageBox>
                <WeatherTextBox>
                    <WatherText>- 1</WatherText>
                    <WatherText>맑음</WatherText>
                </WeatherTextBox>
            </WeatherCenterBox>
            <WeatherFooterBox>
                <WeatherDetailTextBox>
                    <WeatherDetailTitleText>현재 바람:</WeatherDetailTitleText>
                    <WeatherDetailText>북서 3m/s</WeatherDetailText>
                </WeatherDetailTextBox>
                <WeatherDetailTextBox>
                    <WeatherDetailTitleText>현재 습도:</WeatherDetailTitleText>
                    <WeatherDetailText>31%</WeatherDetailText>
                </WeatherDetailTextBox>
                <WeatherDetailTextBox>
                    <WeatherDetailTitleText>통합 대기:</WeatherDetailTitleText>
                    <WeatherDetailText>좋음</WeatherDetailText>
                </WeatherDetailTextBox>
            </WeatherFooterBox>
        </>
    );
}
