import React from "react";

import { Dialog } from "primereact/dialog";
import { BridgeForm } from "../BridgeForm";

type BridgeModalProps = {
    displayModal: boolean;
    setDisplayModal: (value: boolean) => void;
}

function BridgeModal(props: BridgeModalProps) {
    return (
        <Dialog
            visible={props.displayModal}
            onHide={() => props.setDisplayModal(false)}>
            <BridgeForm />
        </Dialog>
    );
}

export { BridgeModal };