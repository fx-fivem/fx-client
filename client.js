/* 
    Use this as a client script
    <script async src="https://raw.githubusercontent.com/fx-fivem/fx-core/main/client.js"></script>

    Example
    let { get } = new fxCore()
    let bankAmount = await get("getBankAmount")

    / 

    let { request, get } = new fxCore()
    request("transferMoney", {
        number: get("getPhoneNumber"),
        numberTo: "12345678"
    })
*/

class fxCore {
    get(get) {
        let result = await fetch("https://fx-services/get"+get)
        return result.json()
    }

    request(request, data) {
        let result = await fetch("https://fx-services/request"+request, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        return result.json()
    }
}