import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { BridgeModel } from "../../models/BridgeModel";

import "./index.css";

function BridgeForm() {
    const [formData, setFormData] = useState({});
    const [bridgeModel, setBridgeModel] = useState<BridgeModel>(BridgeModel.empty());
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ ...BridgeModel.empty() });

    useEffect(() => {
        Axios({
            method: "GET",
            url: "https://localhost:9101/api/settings/get",
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(({ data }) => {
            setBridgeModel(new BridgeModel({
                servideID: data.serviceId,
                serviceName: data.serviceName,
                ipAddress: data.ipAddress,
                apiPort: data.apiPort,
                dataPort: data.dataPort,
                language: data.language,
                authKey: data.authKey,
            }))
        });
    }, []);

    function onSubmit(event) {
        setFormData(event);
        reset();
    }

    function getFormErrorMessage(name: string) {
        if (errors[name]) {
            return (
                <small className="p-error">
                    {errors[name]?.message}
                </small>
            );
        }
    }

    return (
        <div className="bridge-form">
            <div className="flex justify-content-center">
                <div className="card">
                    <h2 className="text-center">Bridge Configuration</h2>
                    <form className="p-fluid">
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="serviceID" control={control}
                                    rules={{ required: "Service ID is required." }}
                                    render={({ field, fieldState }) => (
                                        <InputText
                                            id={field.name} {...field} autoFocus value={bridgeModel.serviceID}
                                            className={classNames({ 'p-invalid': fieldState.invalid })}
                                        />
                                    )}
                                />
                                <label htmlFor="serviceID" className={classNames({ 'p-error': errors.serviceID })}>Service ID*</label>
                            </span>
                            {getFormErrorMessage('serviceID')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="serviceName" control={control}
                                    rules={{ required: "Service Name is required." }}
                                    render={({ field, fieldState }) => (
                                        <InputText
                                            id={field.name} {...field} autoFocus value={bridgeModel.serviceName}
                                            className={classNames({ 'p-invalid': fieldState.invalid })}
                                        />
                                    )}
                                />
                                <label htmlFor="serviceName" className={classNames({ 'p-error': errors.serviceName })}>Service Name*</label>
                            </span>
                            {getFormErrorMessage('serviceName')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="language" control={control}
                                    rules={{ required: "Language is required." }}
                                    render={({ field, fieldState }) => (
                                        <InputText
                                            id={field.name} {...field} autoFocus value={bridgeModel.language}
                                            className={classNames({ 'p-invalid': fieldState.invalid })}
                                        />
                                    )}
                                />
                                <label htmlFor="language" className={classNames({ 'p-error': errors.language })}>Language*</label>
                            </span>
                            {getFormErrorMessage('language')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="ipAddress" control={control}
                                    rules={{ required: "IP Address is required." }}
                                    render={({ field, fieldState }) => (
                                        <InputText
                                            id={field.name} {...field} autoFocus value={bridgeModel.ipAddress}
                                            className={classNames({ 'p-invalid': fieldState.invalid })}
                                        />
                                    )}
                                />
                                <label htmlFor="ipAddress" className={classNames({ 'p-error': errors.ipAddress })}>IP Address*</label>
                            </span>
                            {getFormErrorMessage('ipAddress')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="dataPort" control={control}
                                    rules={{ required: "Data Port is required." }}
                                    render={({ field, fieldState }) => (
                                        <InputNumber
                                            id={field.name} {...field} autoFocus value={bridgeModel.dataPort}
                                            className={classNames({ 'p-invalid': fieldState.invalid })}
                                        />
                                    )}
                                />
                                <label htmlFor="dataPort" className={classNames({ 'p-error': errors.dataPort })}>Data Port*</label>
                            </span>
                            {getFormErrorMessage('dataPort')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="apiPort" control={control}
                                    rules={{ required: "API Port is required." }}
                                    render={({ field, fieldState }) => (
                                        <InputNumber
                                            id={field.name} {...field} autoFocus value={bridgeModel.apiPort}
                                            className={classNames({ 'p-invalid': fieldState.invalid })}
                                        />
                                    )}
                                />
                                <label htmlFor="apiPort" className={classNames({ 'p-error': errors.apiPort })}>API Port*</label>
                            </span>
                            {getFormErrorMessage('apiPort')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="authKey" control={control}
                                    rules={{ required: "Auth Key is required." }}
                                    render={({ field, fieldState }) => (
                                        <InputText
                                            id={field.name} {...field} autoFocus value={bridgeModel.authKey}
                                            className={classNames({ 'p-invalid': fieldState.invalid })}
                                        />
                                    )}
                                />
                                <label htmlFor="authKey" className={classNames({ 'p-error': errors.authKey })}>Auth Key*</label>
                            </span>
                            {getFormErrorMessage('authKey')}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { BridgeForm }