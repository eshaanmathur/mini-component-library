/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
    small: { height: 8, padding: 0, borderRadius: 4 },
    medium: { height: 12, padding: 0, borderRadius: 4 },
    large: { height: 24, padding: 4, borderRadius: 8 },
};

const ProgressBar = ({ value, size }) => {
    return (
        <>
            <Wrapper
                {...sizes[size]}
                role={'progressbar'}
                aria-valuenow={value}
                aria-valuemin={'0'}
                aria-valuemax={'100'}
            >
                <VisuallyHidden>{value}%</VisuallyHidden>
                <Bar value={value} />
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    position: relative;
    background-color: ${COLORS.transparentGray15};
    overflow: hidden;
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: ${(props) => props.borderRadius || '4'}px;
    height: ${(props) => props.height || 8}px;
    padding: ${(props) => props.padding || 0}px;
`;

const Bar = styled.div`
    height: 100%;
    width: ${(props) => props.value ?? 100}%;
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
