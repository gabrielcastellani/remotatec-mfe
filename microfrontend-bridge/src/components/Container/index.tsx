import React from "react";
import { BridgeForm } from "../BridgeForm";
import { Card } from "primereact/card";

function Container() {
    return (
        <div className="h-screen flex align-items-center justify-content-center">
            <Card>
                <BridgeForm />
            </Card>
        </div>
    );
}

export { Container };