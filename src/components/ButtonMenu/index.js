import React from 'react';

import * as S from './elements';

const ButtonMenu = ({icon, text, active, route}) => {
    return (
        <S.Container active={active}>
            <i>{icon}</i>
            <S.Button to={route} active={active.toString()}>{text}</S.Button>
        </S.Container>
    )
};

export default ButtonMenu;
