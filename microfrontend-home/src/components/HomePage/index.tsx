import React, { useState } from "react";
import { Button } from "primereact/button";
import { ServiceStatus } from "../ServiceStatus";
import { LoginModal } from "microfrontend_login/LoginModal";
import { BridgeModal } from "microfrontend_bridge/BridgeModal";

function Container() {
    const [displayLoginModal, setDisplayLoginModal] = useState(false);
    const [displayBridgeModal, setDisplayBridgeModal] = useState(false);

    return (
        <>
            <div className="py-4 px-2 flex gap-3">
                <ServiceStatus name="Home" url="http://192.168.0.17:3000" />
                <ServiceStatus name="Login" url="http://192.168.0.17:3001" onClick={() => setDisplayLoginModal(true)} />
                <ServiceStatus name="Bridge" url="http://192.168.0.17:3002" onClick={() => setDisplayBridgeModal(true)} />
            </div>

            <LoginModal
                displayModal={displayLoginModal}
                setDisplayModal={setDisplayLoginModal}
            />

            <BridgeModal
                displayModal={displayBridgeModal}
                setDisplayModal={setDisplayBridgeModal}
            />
        </>
    );
}

export { Container }