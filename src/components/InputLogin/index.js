import React from 'react';

import * as S from './elements'

const InputLogin = ({ errorMessage, icon, errorText, ...otherProps}) => {
    return (
        <S.Container errorMessage={errorMessage}>
            {errorMessage ? <legend>{errorText}</legend> : <legend></legend>}
            <i>{icon}</i>
            <input {...otherProps} />
        </S.Container>
)};

export default InputLogin;
