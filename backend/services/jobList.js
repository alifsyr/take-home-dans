import axios from 'axios';

export const getJobList = async (req, res) => {
    try {
        const { description, location, full_time, page = 1} = req.query;
        const url = 'https://dev6.dansmultipro.com/api/recruitment/positions.json';
        const params = {page};
        const response = await axios.get(url, { params });
        let jobs = response.data;
        if (description) {
            jobs = jobs.filter(job => job.description.toLowerCase().includes(description.toLowerCase()));
        }
        if (location) {
            jobs = jobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()));
        }
        if (full_time) {
            jobs = jobs.filter(job => job.type.toLowerCase().includes(full_time.toLowerCase()));
        }
        res.status(200).json(jobs);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

export const getJobDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const url = `https://dev6.dansmultipro.com/api/recruitment/positions/${id}`;
        const response = await axios.get(url);
        const job = response.data;
        res.status(200).json(job);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}



