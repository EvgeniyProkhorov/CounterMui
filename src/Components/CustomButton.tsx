import React from "react";

type ButtonProps = {
    title: string
    callback: () => void
    btnIsDisabled?: boolean
}

export const CustomButton = ({title, callback, btnIsDisabled}: ButtonProps) => {
    return (
        <button disabled={btnIsDisabled} onClick={callback}>{title}</button>
    )
}