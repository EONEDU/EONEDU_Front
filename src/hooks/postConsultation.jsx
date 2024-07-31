import axios from 'axios';

const postConsultation = async (date, time, name, phoneNumber) => {
  try {
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    const response = await axios.post(
      `https://hpapohghnaqvaqnbenzy.supabase.co/rest/v1/rpc/add_consultation`,
      {
        p_appointment_date: date,
        p_appointment_time: time,
        p_name: name,
        p_phone_number: phoneNumber
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'apikey': apiKey,
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );
    
    console.log("API Response:", response.data);
    
  } catch (err) {
    console.error("Fetch Error:", err.response ? err.response.data : err.message);
    throw err;
  }
};

export default postConsultation;