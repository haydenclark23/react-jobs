// Loader function to fetch job data based on ID (react router)
const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  return await res.json();
};

export default jobLoader;