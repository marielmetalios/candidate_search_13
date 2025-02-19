const SavedCandidates = () => {

  const candidates = JSON.parse(localStorage.getItem("candidates") as string) || [];
  console.log(candidates);

  return (
    <>
      <div>
        <h2>Potential Candidates</h2>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={candidate.login}>
            <td><img src={candidate.avatar_url}/></td>
            <td>{candidate.name}</td>
            <td>{candidate.location}</td>
            <td>{candidate.email}</td>
            <td>{candidate.company}</td>
            <td>{candidate.bio}</td>
            <td>placeholder</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SavedCandidates;



// psuedo code steps first -- what does code need to do?
// read local storage (convert string back to an array)
// display on screen