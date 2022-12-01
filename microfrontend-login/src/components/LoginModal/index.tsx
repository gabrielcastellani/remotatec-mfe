import React from "react";

import { Dialog } from "primereact/dialog";
import { LoginForm } from "../LoginForm";

type LoginModalProps = {
    displayModal: boolean;
    setDisplayModal: (value: boolean) => void;
}

function LoginModal(props: LoginModalProps) {
    return (
        <Dialog
            visible={props.displayModal}
            onHide={() => props.setDisplayModal(false)}>
            <LoginForm />
        </Dialog>
    );
}

export { LoginModal };