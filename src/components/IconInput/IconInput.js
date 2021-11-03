import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
    small: { iconSize: 16, wapperPadding: 4, fontSize: 14 },
    large: { iconSize: 24, wrapperPadding: 8, fontSize: 18 },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
    const id = label.toLowerCase().split(' ').join('-');
    const { iconSize = 16, wrapperPadding = 4, fontSize = 14 } = sizes[size];
    const inputMargin = iconSize + iconSize / 2;
    const inputWidth = width - inputMargin;
    return (
        <Wrapper wrappertWidth={width} wrapperPadding={wrapperPadding}>
            <Label htmlFor={id} iconSize={iconSize}>
                <Icon id={icon} size={iconSize} />
                <VisuallyHidden as="span">{label}</VisuallyHidden>
            </Label>
            <Input
                fontSize={fontSize}
                iconSize={iconSize}
                id={id}
                width={inputWidth}
                margin={inputMargin}
                type={'text'}
                placeholder={placeholder}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    isolation: isolate;
    border-bottom: 1px solid ${COLORS.black};
    padding: ${(p) => p.wrapperPadding}px;
    width: ${(p) => p.wrappertWidth}px;
    &:focus-within {
        outline-offset: 2px;
        outline: 2px solid hsla(218, 57%, 53%, 1);
        border-radius: 2px;
    }
`;

const Input = styled.input`
    margin-left: ${(p) => p.margin}px;
    width: ${(p) => p.width}px;
    border: 0;
    font-weight: 700;
    font-size: ${(p) => p.fontSize || 14}px;
    color: ${COLORS.gray700};
    &:placeholder-shown {
        font-weight: 400;
        color: ${COLORS.gray500};
    }
    &:focus {
        outline: none;
    }

    ${Wrapper}:hover & {
        color: ${COLORS.black};
    }
`;
const Label = styled.label`
    position: absolute;
    top: 50%;
    margin-top: -${(p) => p.iconSize / 2}px;
    color: ${COLORS.gray700};

    ${Wrapper}:hover & {
        color: ${COLORS.black};
    }
`;

export default IconInput;
