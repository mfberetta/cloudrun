
export default {
    get: async (req, res, next) => { 
        try{
            res.json({
                "AccessPoint_1_KeyPassphrase": "sanlorenzo01",
                "AccessPoint_1_SecurityEncryptionMode": "AES+TKIP",
                "AccessPoint_1_SecurityModeEnabled": "WPA-WPA2-Personal",
                "AccessPoint_1_Status": "Enabled",
                "AccessPoint_2_KeyPassphrase": "sanlorenzo01",
                "AccessPoint_2_SecurityEncryptionMode": "AES+TKIP",
                "AccessPoint_2_SecurityModeEnabled": "WPA-WPA2-Personal",
                "AccessPoint_2_Status": "Enabled",
                "BandSteeringEnable": "true",
                "Radio_1_OperatingChannelBandwidth": "20MHz",
                "Radio_1_OperatingFrequencyBand": "2.4GHz",
                "Radio_1_Status": "Up",
                "Radio_2_OperatingChannelBandwidth": "80MHz",
                "Radio_2_OperatingFrequencyBand": "5GHz",
                "Radio_2_Status": "Up",
                "Ssid_1_SSID": "Benja 2.4GHz",
                "Ssid_1_Status": "Up",
                "Ssid_2_SSID": "Benja 5.8GHz"
              })
        }
        catch (error){
            next(error)
        }
    }
}
