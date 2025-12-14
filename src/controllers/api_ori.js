
export default {
    get: async (req, res, next) => { 
        try{
            res.json({
                "items": {
                    "bandsteering": "DISABLED",
                    "wifi": [
                        {
                            "radioId": "10000",
                            "bw": "20MHz",
                            "band": "2.4",
                            "enable": true,
                            "ssid": [
                                {
                                    "ssidId": "10001",
                                    "ssid": "Fibertel WiFi227-2.4GHz",
                                    "enable": true,
                                    "securityMode": "wpa2-personal",
                                    "encryptionMode": "AES",
                                    "keyPassphrase": "00427199775"
                                }
                            ]
                        },
                        {
                            "radioId": "10100",
                            "bw": "80MHz",
                            "band": "5",
                            "enable": true,
                            "ssid": [
                                {
                                    "ssidId": "10101",
                                    "ssid": "Fibertel WiFi227-5GHz",
                                    "enable": true,
                                    "securityMode": "wpa2-personal",
                                    "encryptionMode": "AES",
                                    "keyPassphrase": "00427199775"
                                }
                            ]
                        }
                    ]
                }
            })
        }
        catch (error){
            next(error)
        }
    }
}
