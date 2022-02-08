import * as actions from '../actions/index';

const initialState = {
    alldogs: [],
    dogs: [],
    detail: [],
    temperaments: []
}

const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case actions.GET_ALL_DOGS: return{
            ...state,
            alldogs:action.payload,
            dogs:action.payload,
        }
        case actions.GET_DOG_NAME: return{
            ...state,
            dogs:action.payload,
        }
        case actions.GET_DOG_ID: return{
            ...state,
            detail:action.payload,
        }
        case actions.POST_DOG: return{
            ...state,
        }
        case actions.GET_TEMPERAMENTS: return{
            ...state,
            temperaments:action.payload,
        }
        case actions.ORDER_BY:{
            let dogcopy = [...state.dogs];
            for(let i=0;i<dogcopy.length;++i){
                let ex = dogcopy[i].weight.split(' - ');
                dogcopy[i].minweight=parseInt(ex[0]);
                if(ex[1]) dogcopy[i].maxweight=parseInt(ex[1]);
                else dogcopy[i].maxweight=ex[0];
            }
            let aux;
            switch(action.payload){
                case "alph-asc": aux = dogcopy.sort(function(a,b){
                    if(a.name>b.name) return 1;
                    if(a.name<b.name) return -1;
                    return 0;
                })
                break;
                case "alph-des": aux = dogcopy.sort(function(a,b){
                    if(a.name>b.name) return -1;
                    if(a.name<b.name) return 1;
                    return 0;
                })
                break;
                case "wei-asc": aux = dogcopy.sort(function(a,b){
                    if(a.minweight>b.minweight) return 1;
                    if(a.minweight<b.minweight) return -1;
                    return 0;
                })
                break;
                case "wei-des": aux = dogcopy.sort(function(a,b){
                    if(a.maxweight>b.maxweight) return -1;
                    if(a.maxweight<b.maxweight) return 1;
                    return 0;
                })
                break;
                default: return{
                    ...state, dogs:state.alldogs
                }
            }
        return {...state,dogs:aux}
        }
        case actions.FILTER_TEMPERAMENTS:{
            let all = state.alldogs;
            let filtered = [];
            if(action.payload==='all'){
                filtered = all;
            }
            else{
                let copywithtemp = [];
                for(let i=0;i<all.length;++i)
                    if(all[i].temperament) copywithtemp.push(all[i]);
                filtered = copywithtemp.filter(e=>e.temperament.includes(action.payload));
            }
            if(filtered.length>0) return {...state,dogs:filtered};
            else return {...state,dogs:"Not Found"};
        }
        case actions.FILTER_DBORAPI: return{
            ...state,
            dogs:action.payload,
        }
        // case actions.FILTER_DBORAPI:{
        //     let all = state.alldogs;
        //     let filtered = all;
        //     if(action.payload==='api'){
        //         filtered = all.filter(e=>typeof e.id==='number');
        //     }
        //     else if(action.payload==='db'){
        //         filtered = all.filter(e=>typeof e.id!='number');
        //     }
        //     return{...state,dogs:filtered};
        // }
        default: return state;
    }
}

export default rootReducer;