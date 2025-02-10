import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

// use Candidate (interface)
const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate>();

  const getCandidates = async () => {
    const potentialCand = await searchGithub();
  }

const candidateDetails = await {
  return (
    Name: potentialCand.name || "N/A",
    Location: potentialCand.location || "N/A",
    Email: potentialCand.email || "N/A",
    Company: potentialCand.name || "N/A",
    Bio: potentialCand.bio || "N/A"
  )

  setCandidates(candidateDetails);
  getCandidates();

};
}  

// for each candidate (map), display interface properties
// we'll searchGithub to search through, and searchGithubuser...
// + sign (onclick) will save candidate to SavedCandidates
// - sign (onclick) will remove candidate

// searchGithub(candidate);
// searchGithubUser();


  return (
  <div>
    <h1>Candidate Search</h1>
    <div>

    </div>
  </div>
)};

export default CandidateSearch;
