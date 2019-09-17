import React from 'react';

import SuperMario from './SuperMario';

const SuperMarioBros = () => {
    
    const amiiboList = useSelector(state => state.amiiboList)
    console.log(amiiboList)

    const dispatch = useDispatch();

    const findSuperMario = () => {
        {amiiboList.map(amiibo => {
            if(amiibo.gameSeries === 'Super Mario'){
                return <SuperMario amiibo={amiibo}/>
            }
        })}
    }

    return (
        <>
        <button onClick ={() => dispatch(getData())}>Get Started</button>
        </>
    )
}

export default SuperMarioBros;

/*
<button onClick={() => >
                {amiiboList.isLoading ? (
                <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={15}
                width={100}
                /> 
                ) : ("Super Mario Bros.")}
            </button>
*/