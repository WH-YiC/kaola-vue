export default {
    async getData () {
        // let res = await fetch('http://localhost:3000/')
        let res = await fetch('http://106.13.228.250:3000/')
        let data = await res.json()
        return data
    },
}