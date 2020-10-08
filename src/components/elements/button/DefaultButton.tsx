import React from "react";
import {
    Button,
    ButtonSpan,
} from "styles/ButtonElement";


interface DefaultButtonProps {
    name : string
    onClickHandler: () => void;

}

export default function DefaultButton({name, onClickHandler} : DefaultButtonProps) {

    return (
        <>
            <Button onClick={onClickHandler}>
                <ButtonSpan>{name}</ButtonSpan>
            </Button>
        </>
    );
}