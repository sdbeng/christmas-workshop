import { setupDevCycle } from "@devcycle/nextjs-sdk/server";

const getUserIdentity = async () => {
    //psuedocode function to call your auth provider and get the user's identity, you might use Next APIs such as `headers()` and `cookies()` 

    // const my_user = await determineUserIdentity(cookies())
    return {
        user_id: 'user123',
        email: 'testuser@xmasflags.com',
    }
}

export const { getVariableValue, getClientContext } = setupDevCycle({
    //server SDK key - private, used to retrieve configuration data
    serverSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_SERVER_SDK_KEY ?? '',
    //client SDK key, public sent to client
    clientSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY ?? '',
    userGetter: getUserIdentity,
    options: {
        enableStreaming: false,
        eventFlushIntervalMS: 1000,
    }
});