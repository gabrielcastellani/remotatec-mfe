import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { classNames } from "primereact/utils";

import "./index.css";

function LoginForm() {
    const defaultValues = { username: "", password: "", remember: false };
    const [formData, setFormData] = useState({});
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    function onSubmit(event) {
        setFormData(event);
        reset();
    }

    function getFormErrorMessage(name: string) {
        if (errors[name]) {
            return (
                <small className="p-error">
                    {errors[name].message}
                </small>
            );
        }
    }

    return (
        <div className="login-form">
            <div className="flex justify-content-center">
                <div className="card">
                    <h2 className="text-center">Authenticate</h2>
                    <form className="p-fluid" onSubmit={handleSubmit(onSubmit)}>
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="username" control={control}
                                    rules={{ required: "Username is required." }}
                                    render={({ field, fieldState }) => (
                                        <InputText
                                            id={field.name} {...field} autoFocus
                                            className={classNames({ 'p-invalid': fieldState.invalid })}
                                        />
                                    )}
                                />
                                <label htmlFor="username" className={classNames({ 'p-error': errors.username })}>Username*</label>
                            </span>
                            {getFormErrorMessage('username')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="password" control={control}
                                    rules={{ required: 'Password is required.' }}
                                    render={({ field, fieldState }) => (
                                        <Password
                                            id={field.name} {...field} feedback={false} toggleMask
                                            className={classNames({ 'p-invalid': fieldState.invalid })}
                                        />
                                    )}
                                />
                                <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Password*</label>
                            </span>
                            {getFormErrorMessage('password')}
                        </div>
                        <div className="field-checkbox">
                            <Controller name="remember" control={control}
                                render={({ field, fieldState }) => (
                                    <Checkbox
                                        inputId={field.name} checked={field.value}
                                        onChange={(event) => field.onChange(event.checked)}
                                        className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )}
                            />
                            <label htmlFor="remember" className={classNames({ 'p-error': errors.remember })}>Remember me?</label>
                        </div>
                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export { LoginForm }