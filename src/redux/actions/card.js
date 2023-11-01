
export const productActionCard = (id)=> async (dispatch) => {

    const data = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=b51f14a97486a38a89172607a24fe450`)
    .then(res=>res.json())
    
    dispatch({type:"ADD_CARD", payload:{
        id:data.id,
        image:data.poster_path,
        title:data.title,
        overview:data.overview
    }   
     })
}

export const productRemoveCard = (productId)=>(dispatch) => {
    dispatch({type:"REMOVE_CARD", payload:productId  })
}
