import React, { Children } from 'react'

import * as S from './elements'

const Calendar = ({ data }) => {

    const days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']

    return (
        <S.Container>
            <S.Title><S.ArrowLeft />Janeiro<S.ArrowRight /></S.Title>
            <S.Weekdays>
                <li>D</li>
                <li>S</li>
                <li>T</li>
                <li>Q</li>
                <li>Q</li>
                <li>S</li>
                <li className='saturday'>S</li>
            </S.Weekdays>

            <S.Days>
                {Children.toArray(days.map(day => {
                    if (day === '07' || day === '14' || day === '21' || day === '28') {
                        return (
                            <S.Weekend
                                scheduling={(data
                                    .filter(item => item.day === `2021-01-${day}`)
                                    .filter(item => item.status !== 'waiting'))
                                    .length > 0
                                }
                                waiting={(data
                                    .filter(item => item.day === `2021-01-${day}`)
                                    .filter(item => item.status === 'waiting'))
                                    .length > 0
                                }>
                                {parseInt(day)}
                            </S.Weekend>
                        )
                    } else {
                        return (
                            <S.Weekday
                                scheduling={(data
                                    .filter(item => item.day === `2021-01-${day}`)
                                    .filter(item => item.status !== 'waiting'))
                                    .length > 0
                                }
                                waiting={(data
                                    .filter(item => item.day === `2021-01-${day}`)
                                    .filter(item => item.status === 'waiting'))
                                    .length > 0}>
                                {parseInt(day)}
                            </S.Weekday>
                        )
                    }
                }))}
                <S.NextMouth>1</S.NextMouth>
                <S.NextMouth>2</S.NextMouth>
                <S.NextMouth>3</S.NextMouth>
                <S.NextMouth>4</S.NextMouth>
            </S.Days>
        </S.Container>
    )
}

export default Calendar