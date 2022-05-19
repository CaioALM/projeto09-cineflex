import styled from 'styled-components'
export default function Header() {
    return (
        <HeaderPage>
            <p>CINEFLEX</p>
        </HeaderPage>
    )
}




// ------------------------------------------- Styled Components --------------------------------------------------------
const HeaderPage = styled.div`
    position: absolute;
    width: 375px;
    height: 67px;
    left: 0px;
    top: 0px;
    
    background: #C3CFD9;

    display: flex;
    justify-content: center;
    align-items: center;


    p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #E8833A;
}

`

