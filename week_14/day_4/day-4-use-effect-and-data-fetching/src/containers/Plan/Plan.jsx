import Country from "../../components/Country/Country";
import "./Plan.css"

const Plan = ({planBook}) => {

  return (
    <div className="plan">
      {
        planBook.map((plan, index) => {
          return (<Country key={index} country={plan} />)
        })
      }
    </div>
  )
}

export default Plan;