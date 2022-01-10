import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

type ButtonInterface = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonInterface> = ({
...rest
}) => (
        <Container {...rest} />
    )

export default Button;
