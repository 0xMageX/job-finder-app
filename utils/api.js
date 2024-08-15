import axios from 'axios';

const API_URL = 'https://testapi.getlokalapp.com/common/jobs?page=';


export const fetchJobs = async (page) => {
    try {
      const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      const result = await response.json();
      return result.jobs; 
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw error;
    }a
  };
  