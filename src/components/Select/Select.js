import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);
    return (
        <Wrapper>
            <SelectStyled value={value} aria-label={label} onChange={onChange}>
                {children}
            </SelectStyled>
            <Label aria-hidden="true">{displayedValue}</Label>
            <StyledIcon id="chevron-down" size={24} strokeWidth={2} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    padding-right: 24px;
    padding: 16px 52px 16px 24px;
    overflow: hidden;
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    isolation: isolate;
    width: max-content;
    color: ${COLORS.gray700};

    &:focus-within {
        outline-offset: 0px;
        outline: 2px solid hsla(218, 57%, 53%, 1);
        border-radius: 2px;
    }

    &:hover {
        color: ${COLORS.black};
    }
`;

const SelectStyled = styled.select`
    appearance: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
`;

const Label = styled.span`
    position: relative;
    pointer-events: none;
    font-size: 1rem;
`;

const StyledIcon = styled(Icon)`
    pointer-events: none;
    position: absolute;
    right: 16px;
    top: 50%;
    margin-top: -12px;
`;
export default Select;
