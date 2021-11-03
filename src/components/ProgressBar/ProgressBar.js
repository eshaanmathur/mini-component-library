/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
    small: { height: 8, padding: 0, borderRadius: 4 },
    medium: { height: 12, padding: 0, borderRadius: 4 },
    large: { height: 16, padding: 4, borderRadius: 8 },
};

const ProgressBar = ({ value, size }) => {
    const styles = sizes[size];

    if (!styles) {
        throw new Error(
            `Unknown size value for the ProgressBar: ${size}. Valid options are ${Object.keys(sizes).join(' | ')}`,
        );
    }

    return (
        <>
            <Wrapper
                style={{
                    '--padding': styles.padding + 'px',
                    '--radius': styles.borderRadius + 'px',
                }}
                role={'progressbar'}
                aria-valuenow={value}
                aria-valuemin={'0'}
                aria-valuemax={'100'}
            >
                <VisuallyHidden>{value}%</VisuallyHidden>
                <BarWrapper>
                    <Bar style={{ '--width': value + '%', '--height': styles.height + 'px' }} />
                </BarWrapper>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    position: relative;
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--radius, 4px);
    padding: var(--padding, 0);
`;

const BarWrapper = styled.div`
    overflow: hidden;
    border-radius: 4px;
    width: 100%;
`;

const Bar = styled.div`
    height: var(--height, 8px);
    width: var(--width, 50%);
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
