export type AppConfig = {
    app: {
        port: number;
        env: string;
        apiPrefix: string;
    };
};

export type DatabaseConfig = {
    database: {
        uri: string;
    };
};

export type AllConfig = AppConfig & DatabaseConfig;
