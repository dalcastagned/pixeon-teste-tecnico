import React from 'react'
import * as S from './elements'
import { ArrowTop } from '@styled-icons/open-iconic'

const Range = ({ percentage, colorRange }) => {

    const angle = `${(percentage / 100) * 180}deg`

    return (
        <S.Gauge>
            <S.Background>
                <S.Percentage colorRange={colorRange} angle={angle} />
                <S.Mask />
                <S.Value  colorRange={colorRange} >
                    <i>
                        <ArrowTop/>
                    </i>
                    {`${percentage}%`}
                </S.Value >
            </S.Background>
        </S.Gauge>
    )
}

export default Range