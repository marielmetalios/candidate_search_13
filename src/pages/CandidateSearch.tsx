import { useState, useEffect } from 'react';
// use effect, we can run an action before the component loads!
import { searchGithub } from '../api/API';
import { searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
// import { searchGithub, searchGithubUser } from '../api/API';

// we need to store current candidate and potential candidates
// possible that candidate is undefined on line 12 because of empty initialization
  const CandidateSearch = async () => {
      const [potential, setPotential] = useState<Candidate[]>([]);
      const [candidate, setCandidate] = useState<Candidate>();
      const [currentIndex, setCurrentIndex] = useState(0)

  const getCandidates = async () => {
    const potentialCand = await searchGithub();
    console.log(potentialCand);
    const currentCandidate = await searchGithubUser(potentialCand[currentIndex]);
    setCandidate(currentCandidate);
    console.log(potentialCand);
  };

  // we are updating the index, scanning through array in order
  // when we inititally setCandidate, we set it to position 0
  // we have to UPDATE that, to next position
  // we're going to display whatever person at the current index

  const nextCandidate = () => {
    if(currentIndex === potential.length -1){
      console.log("no more candidates left")
    } else {
    setCandidate(potential[currentIndex + 1])
    setCurrentIndex(currentIndex + 1)
  }
};

  // function is useEffect's first argument!
  // second argument is an array - you need it there so it's NOT an infinite loop!
  useEffect(() => {
    getCandidates();
  },[])

  

    // get currentcandidate
    // take candidate and add it to array of candidates
    // then save updated array with new candidate to local storage
    // should go to next candidate

    // create the initial array, and update the array (not override!)
    // we are getting a stringified version of candidates from local storage
    // we need to GET from localstorage, in order to add onto it
    // empty array / or statement is needed for first candidate, when we have no one there to start
    const storeCandidate = () => {
    nextCandidate();
    let storedCandidates: Candidate[]= JSON.parse(localStorage.getItem("candidates") as string) || []
    console.log(storedCandidates)
    // const storage: unknown = localStorage.getItem('candidates');
    // const storedCandidates: Candidate[] = (storage as Candidate[]) || [];
    storedCandidates.push(candidate as Candidate);
    //local storage reminder - key, value
    localStorage.setItem("candidates",  JSON.stringify(storedCandidates))
    console.log(storedCandidates)
  }

  return (
  <div>
    <h1>Candidate Search</h1>
    {/* <div>
      {currentIndex === potential.length -1 ? (
        <div>No more candidates</div> 
      ) : (
        <div> 
          <img src={candidate.avatar_url} />
          <img src={candidate.avatar_url} />
      <p
      
    </div> */}

    {/* <div> { candidate.login } </div> */}
    <button onClick={storeCandidate}>+</button>
    <button onClick={nextCandidate}>-</button>
  </div>
)};

export default CandidateSearch;
