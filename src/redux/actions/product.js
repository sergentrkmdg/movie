
export const productAction = () => async(dispatch)=> {
    const data = await fetch ("https://api.themoviedb.org/3/movie/popular?api_key=b51f14a97486a38a89172607a24fe450")
    .then(res=>res.json())
    .then(resu=>resu.results)
    dispatch({type:"GET_DATA", payload:data})
}