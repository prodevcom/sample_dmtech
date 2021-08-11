import app from "./app";
import {appEnv} from "./constants/server.constants"

app.listen(appEnv.PORT, () => console.log(`Listening on port ${appEnv.PORT}`));
