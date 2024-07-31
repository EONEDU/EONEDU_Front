import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer";

const initialState = {
  data: null,
  loading: true,
  error: null,
  isVisible: false,
};

const useFetchConsultationAvailableByMonth = (year, month) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const res = await axios.post(
          `https://hpapohghnaqvaqnbenzy.supabase.co/rest/v1/rpc/check_monthly_appointment_availability`,
          { input_year: year, input_month: month },
          {
            headers: {
              apikey: import.meta.env.VITE_APP_API_KEY,
              Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`
            }
          }
        );
        
        console.log("API Response:", res.data);

        if (res.data) {
          dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
        } else {
          dispatch({ type: 'FETCH_FAILURE', payload: "Invalid data format" });
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        dispatch({ type: 'FETCH_FAILURE', payload: err.message });
      }
    };

    fetchData();
    
  }, [month, year]);

  return state;
};

export default useFetchConsultationAvailableByMonth;