export const searchAction = (keyword) => async(dispatch)=> {
    const data = await fetch ("https://api.themoviedb.org/3/discover/movie?api_key=b51f14a97486a38a89172607a24fe450")
    .then(res=>res.json())
    .then(resu=>resu.results)
    dispatch({type:"SEARCH", payload:data.filter(dt => dt.title.toLocaleLowerCase().includes(keyword))})
}


