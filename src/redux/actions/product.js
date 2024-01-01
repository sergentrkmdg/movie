
export const productAction = () => async(dispatch)=> {
    const data = await fetch ("https://api.themoviedb.org/3/movie/popular?api_key=b51f14a97486a38a89172607a24fe450")
    .then(res=>res.json())
    .then(resu=>resu.results)
    dispatch({type:"GET_DATA", payload:data})
}

export const topProductAction = () => async(dispatch)=> {
    const top = await fetch ("https://api.themoviedb.org/3/movie/top_rated?api_key=b51f14a97486a38a89172607a24fe450")
    .then(rate=>rate.json())
    .then(rated=>rated.results)
    dispatch({type:"GET_TOP", payload:top})
}

export const nowProductAction = () => async(dispatch)=> {
    const now = await fetch ("https://api.themoviedb.org/3/trending/movie/day?api_key=b51f14a97486a38a89172607a24fe450")
    .then(now=>now.json())
    .then(nowP=>nowP.results)
    dispatch({type:"GET_NOW", payload:now})
}

export const productDetailAction = (id)=> async (dispatch) => {

    const deta = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=b51f14a97486a38a89172607a24fe450`)
    .then(res=>res.json())
    
    dispatch({type:"GET_DETAIL", payload:deta })
    dispatch({type:"GET_NOW", payload:deta })
    dispatch({type:"GET_TOP", payload:deta })
}