
import { AUTO_LANGUAGE } from '../constants'
import { Action, Language, State, fromLanguage } from '../types.d'
import { useReducer } from 'react'

const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false,
}

function reducer(state: State, action: Action) {
    const { type } = action

    switch (type) {
        case 'INTERCHANGE_LANGUAGES':
            if (state.fromLanguage === AUTO_LANGUAGE) return state

            return {
                ...state,
                fromLanguage: state.toLanguage,
                toLanguage: state.fromLanguage
            }
            break;
        case 'SET_FROM_LANGUAGE':
            return {
                ...state,
                fromLanguage: action.payload
            }
            break;
        case 'SET_TO_LANGUAGE':
            return {
                ...state,
                toLanguage: action.payload
            }
            break;
        case 'SET_FROM_TEXT':
            return {
                ...state,
                loading: true,
                fromText: action.payload
            }
            break;
        case 'SET_RESULT':
            return {
                ...state,
                loading: false,
                result: action.payload
            }
            break;
        default:
            return state
            break;
    }
}

export function useStore() {
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
    }, dispatch] = useReducer(reducer, initialState)

    const interchangeLanguages = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAGES' })
    }

    const setFromLanguage = (payload: fromLanguage) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload })
    }

    const setToLanguage = (payload: Language) => {
        dispatch({ type: 'SET_TO_LANGUAGE', payload })
    }
    const setFromText = (payload: string) => {
        dispatch({ type: 'SET_FROM_TEXT', payload })
    }

    const setResult = (payload: string) => {
        dispatch({ type: 'SET_RESULT', payload })
    }

    return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult
    }
}