import React from "react";
import { Job } from "../../types/Job";
import './Job_item.css';

type Props = {
  job: Job;
}

export const Item:React.FC <Props> = ({job}) => {
  return (
		<div className="item">
      <div className="item__image">
        <img 
          src={job.pictures[0]}
          alt="icon_place_job"
          className="item__image-pic" 
        />
      </div>
      <div className="item__information">
        <div className="item__content content">
        <div className="content__job">
          {job.title}
        </div>
        <div className="content__work">
        Department name • 
        </div>
        <div className="content__location location">
          <div className="content__location-icon">
            <img 
              src="https://i.ibb.co/GHjcpN0/Location.png" 
              alt="location-icon"
              className="content__location-icon-pic" />
          </div>
          <div className="content__location-name">
            Vienna, Austria
          </div>
        </div>
        </div>
        <div className="item__rating-inform">
        <div className="item__rating">
        <img 
          src="https://i.ibb.co/FKFBmV5/star.png" 
          alt="rating_star"
          className="item__rating-pic"
           />
                   <img 
          src="https://i.ibb.co/FKFBmV5/star.png" 
          alt="rating_star"
          className="item__rating-pic"
           />
                   <img 
          src="https://i.ibb.co/FKFBmV5/star.png" 
          alt="rating_star"
          className="item__rating-pic"
           />
                   <img 
          src="https://i.ibb.co/FKFBmV5/star.png" 
          alt="rating_star"
          className="item__rating-pic"
           />
                   <img 
          src="https://i.ibb.co/FKFBmV5/star.png" 
          alt="rating_star"
          className="item__rating-pic"
           />
        </div>
        <div className="item__add additional">
        <div className="additional__bookmark">
          <img 
          src="https://i.ibb.co/t21d2Kf/bookmark.png" 
          alt="bookmark_logo"
          className="additional__bookmark-pic"
          />
        </div>
        <div className="additional__date">
          Posted 2 days ago
        </div>
        </div>
      </div>
    </div>

		</div>
  )
};

export default Item;