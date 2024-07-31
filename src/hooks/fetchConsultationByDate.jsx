import axios from 'axios';

const fetchConsultationsByDate = async (year, month, day) => {
  try {
    const res = await axios.post(
      `https://hpapohghnaqvaqnbenzy.supabase.co/rest/v1/rpc/get_appointments_by_date`,
      { year, month, day },
      {
        headers: {
          apikey: import.meta.env.VITE_APP_API_KEY,
          Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`
        }
      }
    );
    
    console.log("API Response:", res.data);
    
    if (res.data) {
      return res.data;
    } else {
      throw new Error("Invalid data format");
    }
  } catch (err) {
    console.error("Fetch Error:", err);
    throw err;
  }
};

export default fetchConsultationsByDate;