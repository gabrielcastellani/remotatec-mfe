type BridgeProps = {
    servideID: string;
    serviceName: string;
    language: string;
    ipAddress: string;
    dataPort: number;
    apiPort: number;
    authKey: string;
}

class BridgeModel {
    private props: BridgeProps;

    constructor(props: BridgeProps) {
        this.props = props;
    }

    get serviceID() { return this.props.servideID; }
    set serviceID(value: string) {
        this.props.servideID = value;
    }

    get serviceName() { return this.props.serviceName; }
    set serviceName(value: string) {
        this.props.serviceName = value;
    }

    get language() { return this.props.language; }
    set language(value: string) {
        this.props.language = value;
    }

    get ipAddress() { return this.props.ipAddress; }
    set ipAddress(value: string) {
        this.props.ipAddress = value;
    }

    get dataPort() { return this.props.dataPort; }
    set dataPort(value: number) {
        this.props.dataPort = value;
    }

    get apiPort() { return this.props.apiPort; }
    set apiPort(value: number) {
        this.props.apiPort = value;
    }

    get authKey() { return this.props.authKey; }
    set authKey(value: string) {
        this.props.authKey = value;
    }

    static empty() {
        return new BridgeModel({
            servideID: "",
            serviceName: "",
            apiPort: 0,
            dataPort: 0,
            authKey: "",
            ipAddress: "",
            language: "",
        });
    }
}

export { BridgeModel, BridgeProps }