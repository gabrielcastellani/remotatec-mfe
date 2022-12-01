import React from "react";
import { LoginForm } from "../LoginForm";
import { Card } from "primereact/card";

function Container() {
    return (
        <div className="h-screen flex align-items-center justify-content-center">
            <Card>
                <LoginForm />
            </Card>
        </div>
    );
}

export { Container }