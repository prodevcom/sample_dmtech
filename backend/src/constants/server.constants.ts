import {load} from "ts-dotenv";

const appEnv = load({
    NAME: String,
    PORT: Number,
    BASE_URL: String,
    MONGO_SRV: String,
    NODE_ENV: [
        'production' as const,
        'development' as const
    ]
})

export {appEnv};
