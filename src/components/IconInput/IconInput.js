import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
    small: { iconSize: 16, padding: 4, fontSize: 14 },
    large: { iconSize: 24, padding: 8, fontSize: 18 },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
    const id = label.toLowerCase().split(' ').join('-');
    const styles = sizes[size];

    if (!styles) {
        throw new Error(
            `Unknown size value for the IconInput: ${size}. Valid options are ${Object.keys(sizes).join(' | ')}`,
        );
    }

    const inputMargin = styles.iconSize + styles.iconSize / 2;
    const inputWidth = width - styles.inputMargin;

    return (
        <Wrapper
            style={{
                '--wrappertWidth': width + 'px',
                '--wrapperPadding': styles.padding + 'px',
                '--font-size': styles.fontSize + 'px',
                '--input-width': inputWidth + 'px',
                '--input-margin': inputMargin + 'px',
                '--label-margin-top': `-${styles.iconSize / 2}px`,
            }}
        >
            <Label htmlFor={id}>
                <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
                <VisuallyHidden as="span">{label}</VisuallyHidden>
            </Label>
            <Input id={id} type={'text'} placeholder={placeholder} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    isolation: isolate;
    border-bottom: 1px solid ${COLORS.black};
    padding: var(--wrapperPadding);
    width: var(--wrappertWidth);
    &:focus-within {
        outline-offset: 2px;
        outline: 2px solid hsla(218, 57%, 53%, 1);
        border-radius: 2px;
    }
`;

const Input = styled.input`
    width: var(--input-width);
    margin-left: var(--input-margin);
    border: 0;
    font-weight: 700;
    font-size: var(--font-size);
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
    margin-top: var(--label-margin-top);
    color: ${COLORS.gray700};

    ${Wrapper}:hover & {
        color: ${COLORS.black};
    }
`;

export default IconInput;
