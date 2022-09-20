import { useState } from "react";
import Rect from './Rect';


function App() {

  const [respValue, setResp] = useState(null)
  const [compValue, setComp] = useState(null)
  const [trustValue, setTrust] = useState(null)
  const [cssValue, setCss] = useState(null)
  const [ratings, setRatings] = useState({
    'Responsiveness': null,
    'Competency': null,
    'Trustworthiness': null,
    'Customer service': null
  })


  let hooksValue = [respValue, compValue, trustValue, cssValue];
  let headingData = ['Responsiveness', 'Competency in advising right solutions', 'Trustworthiness', 'Customer Service and Support'];
  let ratingValues = ['Extremely bad', 'Bad', 'Neutral', 'Good', 'Extremely good']

  let colorpallet = {
    1: '#dc2626',
    2: '#f97316',
    3: '#facc15',
    4: '#84cc16',
    5: '#15803d'
  }

  let handlers = [handleResp, handleComp, handleTrust, handleCustomer]

  // rating of responsiveness handler
  function handleResp(e) {
    let clickedrating = e.target.value;
    setResp(ratingValues.indexOf(clickedrating) + 1);

    setRatings({
      ...ratings,
      'Responsiveness': clickedrating,
    })
    
  }

  // rating of competency handler
  function handleComp(e) {

    let clickedrating = e.target.value;
    setComp(ratingValues.indexOf(clickedrating) + 1);

    setRatings({
      ...ratings,
      'Competency': clickedrating,
    })
  }

  // rating of trustwortiness handler 
  function handleTrust(e) {
    let clickedrating = e.target.value;
    setTrust(ratingValues.indexOf(clickedrating) + 1);

    setRatings({
      ...ratings,
      'Trustworthiness': clickedrating,
    })

  }

  //rating of customer service and support handler
  function handleCustomer(e) {
    let clickedrating = e.target.value;
    setCss(ratingValues.indexOf(clickedrating) + 1);

    setRatings({
      ...ratings,
      'Customer service': clickedrating,
    })

  }

  function formSubmit(e) {
    e.preventDefault();
    console.log(ratings)
  }

  return (
    <div className="App p-10 bg-gray-50 flex flex-col justify-center items-center text-center ">
      <h1 className="">Please rate your satisfaction on the following attributes of our service.</h1>

      <form action="" onSubmit={formSubmit} >

        {Object.keys(ratings).map((comp, i) => {
          return (
            
            // rating attributes
            <div className='my-10' key={comp}>
              <h1 className="text">{headingData[i]}</h1>
              <div className="flex gap-0.5 mt-4">
                {ratingValues.map((item, index) => {
                  let idx = index + 1;
                  return (

                    // ratings values and corresponding checkbox
                    <label className="flex flex-col gap-1" key={comp + idx} htmlFor={comp + idx} >
                      <h1 className='text-xs'>{item}</h1>
                      <input type="radio" id={comp + idx} name='rating' className="hidden" value={item} onClick={handlers[i]} />
                      <div className="hover:cursor-pointer">
                        <Rect fill={idx <= hooksValue[i] ? `${colorpallet[hooksValue[i]]}` : '#9ca3af'} />
                      </div>
                    </label>

                  )
                }
                )}
              </div>
            </div>

          )
        })}
        <input type="submit" value='Next' name="" id="" className="m-5 bg-green-600 px-10 py-1 rounded-md text-gray-100 hover:bg-green-700 hover:cursor-pointer" />
      </form>
    </div>
  );
}

export default App;
