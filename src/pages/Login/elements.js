import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, rgba(101,65,225,1) 0%, rgba(34,190,167,1) 100%);
    justify-content: center;
    align-items: center;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    img{
        max-width: 280px;   
    }

    h1 {
        font-size: 24px;
        color: #374557;   
        font-weight: 500;
        line-height: 32px;
        text-align: center;
        padding: 40px 0;
    }
`

export const ContainerLogin = styled.div`
    width: 600px;
    height: 600px;
    background: #fff;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`


