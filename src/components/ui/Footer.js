import React from 'react';
import styled from 'styled-components';

import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

const StyledFooter = styled.div`
    display: flex;
    justify-Content: space-between;
    background-color: #000;
    color: #fff;
    padding: 10px;
    font-size: 13px;
`

const WedsLinks = styled.div`

`

const WedsCopyright = styled.div`
    display: flex;
    align-items: flex-end;
`

const WedsTerms = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const WedsAnchor = styled.a`
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
`

const WedsCustomAncor = styled(WedsAnchor)`
    color: #337ab7;
    margin-right: 0;
`

const Weds = styled.div`
    margin-bottom: 10px;
`

const Footer = () => (
    <StyledFooter>
        <WedsLinks>
            <Weds>
                Weds360
            </Weds>
            <div>
                <WedsAnchor href="https://www.facebook.com/Weds360/" target="_blank">
                    <FaFacebookF />
                </WedsAnchor>
                <WedsAnchor href="https://www.instagram.com/weds360/" target="_blank">
                    <FaInstagram />
                </WedsAnchor>
            </div>
        </WedsLinks>
        <WedsCopyright>
            © Copyright <WedsCustomAncor href="https://plus360.xyz/" target="_blank" rel="noopener noreferrer">Plus360</WedsCustomAncor>. All Rights Reserved
        </WedsCopyright>
        <WedsTerms>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
        </WedsTerms>
    </StyledFooter>
);

export default Footer;