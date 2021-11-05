import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
    small: { iconSize: 16, padding: 4, fontSize: 14, spacing: 8 },
    large: { iconSize: 24, padding: 8, fontSize: 18, spacing: 12 },
};

const IconInput = ({ label, icon, width = 250, size, placeholder, ...delegated }) => {
    const id = label.toLowerCase().split(' ').join('-');
    const styles = sizes[size];

    if (!styles) {
        throw new Error(
            `Unknown size value for the IconInput: ${size}. Valid options are ${Object.keys(sizes).join(' | ')}`,
        );
    }

    return (
        <Wrapper
            style={{
                '--width': width + 'px',
                '--padding': styles.padding + 'px',
                '--padding-bottom': `${styles.padding - 1}px`,
                '--padding-left': styles.iconSize + styles.spacing + 'px',
                '--font-size': styles.fontSize + 'px',
                '--label-margin-top': `-${styles.iconSize / 2}px`,
            }}
        >
            <Label htmlFor={id}>
                <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
                <VisuallyHidden as="span">{label}</VisuallyHidden>
            </Label>
            <Input id={id} type={'text'} placeholder={placeholder} {...delegated} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    isolation: isolate;
`;

const Input = styled.input`
    width: var(--width);
    padding: var(--padding);
    padding-left: var(--padding-left);
    padding-bottom: var(--padding-bottom);
    border: none;
    border-bottom: 1px solid ${COLORS.black};
    font-weight: 700;
    font-size: var(--font-size);
    color: ${COLORS.gray700};

    &::placeholder {
        font-weight: 400;
        color: ${COLORS.gray500};
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
