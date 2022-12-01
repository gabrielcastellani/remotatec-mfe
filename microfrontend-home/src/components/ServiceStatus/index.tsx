import React from "react";
import { useEffect, useState } from "react";
import { Card } from "primereact/card";

type ServiceStatusProps = {
    name: string;
    url: string;
    onClick: () => void;
}

function ServiceStatus(props: ServiceStatusProps) {
    const [status, setStatus] = useState("Loading...");

    useEffect(() => {
        setInterval(() => {
            fetch(props.url, {
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*', 
                    'content-type': 'aplication/json'
                }
            })
            .then(response => setStatus("Online"))
            .catch(error => setStatus("Offline"));
        }, 5000);
    }, []);

    return (
        <Card
            className="hover:shadow-5 cursor-pointer"
            onClick={() => props.onClick()}
            style={{ width: '15rem' }}
            title={props.name} 
            subTitle={`Status: ${status}`} 
        />
    );
}

export { ServiceStatus }