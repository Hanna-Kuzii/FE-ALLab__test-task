import React from "react";
import './Jobs_list.css' 
import Item from "../Job_item/Job_item";
import { Job } from "../../types/Job";

type Props = {
	jobs: Job[];
}

export const List: React.FC <Props> = ({jobs}) => {
	return (
		<div className="list">
			{jobs.map(job => (
				<div key={job.id} className="list__item">
					<Item job={job}/>
				</div>
			))}

		</div>
  )
};

// export default List;
