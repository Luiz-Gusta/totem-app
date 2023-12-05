export const requestSupport =() => {
    return fetch('//', {
        cache: 'no-store',
        method: 'POST',
        headers: {
            accept: '',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            code: '311',
            latitude: '-23.717299',
            longitude: '-45.440373'
        })
    })
    if(response.ok){
        const result = await response.json()
        if(result?.success){
            //
        }
    } 
}