import { useReducer, useEffect } from "react";

const initialState = {
  rate: null,
  error: null,
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, rate: action.payload };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useBitcoinRate(currency) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let isMounted = true;

    const fetchRate = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        if (isMounted) {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: data.bitcoin[currency.toLowerCase()],
          });
        }
      } catch (error) {
        if (isMounted) {
          dispatch({ type: "FETCH_FAILURE", payload: error.message });
        }
      }
    };

    fetchRate();

    return () => {
      isMounted = false;
    };
  }, [currency]);

  return state;
}

export default useBitcoinRate;
