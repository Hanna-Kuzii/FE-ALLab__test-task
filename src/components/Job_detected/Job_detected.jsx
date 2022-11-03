import React from 'react';
import './Job_detected.css';

export const Detected = () => {
	return (
		<div className='job-detected'>
			<div className='job-detected__page page'>
				<div className='page__information'>
					<div className='page__information__header'>
						<div className='page__information__header__title header-text'>
							Job Details
						</div>
						<hr className='line' />
						<div className='page__information__header__elements'>
							<div className='page__information__header__elements__save'>
								<img 
									src="https://i.ibb.co/0FhJ7ZV/bookmark.png"
									alt="save-icon" 
									className='page__information__header__elements__img'/>
								<div className='page__information__header__elements__text add-text'>
									Save to my list
								</div>
							</div>
							<div className='page__information__header__elements__share'>
								<img 
									src="https://i.ibb.co/bWPyXtM/Share.png"
									alt="share-icon" 
									className='page__information__header__elements__img'/>
								<div className='page__information__header__elements__text  add-text'>
									Share
								</div>
							</div>
						</div>
					</div>
					<hr className='line' />
					<div className='page__information__button-apply'>
						<button type='button' className='button-apply'>
							Apply now
						</button>
					</div>
					<div className='page__information__job job'>
						<div className='job__main-information'>
							<div className='job__main-information__title'>
								Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)
							</div>
							<div className='job__main-information__salary'>
								<div className='job__main-information__salary-summ'>
									€ 54 000—60 000
								</div>
								<div className='job__main-information__salary-br'>
									Brutto, per year
								</div>
							</div>
						</div>
						<div className="job__date">
          		Posted 2 days ago
        		</div>
						<div className='job__description'>
							<div className='job__description__text'>
								{
							'\n  Duis Lorem qui incididunt consequat fugiat sunt exercitation quis minim magna. Voluptate consequat ea non quis elit Lorem minim veniam ullamco sunt. Non deserunt dolore exercitation officia nostrud ut veniam eu veniam dolor veniam. Et cillum minim occaecat velit sunt ea enim elit occaecat laborum anim veniam quis irure.\n  \n  Responsopilities:\n    Deserunt duis pariatur nulla deserunt qui. Enim enim exercitation commodo qui elit ex voluptate irure nostrud. Excepteur cupidatat eu amet culpa dolore aliquip.\n  \nCompensation & Benefits:\n\t    Consectetur adipisicing nulla pariatur labore laborum deserunt. Elit pariatur duis ex consectetur sint id velit labore ex. Irure magna ex non excepteur cillum mollit fugiat minim labore do elit minim eiusmod qui.\n\n'

								}
							</div>
						</div>
						<div className='page__information__button-apply'>
							<button type='button' className='button-apply'>
								Apply now
							</button>
						</div>
					</div>
					<div className='page__information__add'>
					<div className='page__information__add-info add-info'>
						<div className='add-info__header header-text'>
							Additional info
						</div>
						<hr className='line' />
						<div className='add-info__employment'>
							<div className='add-info__employment__title add-info__title'>
								Employment type
							</div>
							<div className='add-info__parameters'>
								<div className='add-info__employment__parameter add-info__param'>
									Full time
								</div>
								<div className='add-info__employment__parameter  add-info__param'>
									Part time
								</div>
							</div>
						</div>
						<div className='add-info__benefits'>
							<div className='add-info__benefits__title add-info__title'>
								Benefits
							</div>
							<div className='add-info__parameters'>
								<div className='add-info__benefits__parameter  add-info__param'>
									Flexible shedule
								</div>
								<div className='add-info__benefits__parameter  add-info__param'>
									Relocation assistance
								</div>
							</div>
						</div>

					</div>
					<div className='page__information__attached-images attached-images'>
						<div className='attached-images__header header-text'>
							Attached images
						</div>
						<hr className='line' />
						<div className='attached-images__pictures'>
							<img 
								src="https://i.ibb.co/SBgxZ37/Image-1.png"
								alt="place-job"
								className='attached-images__picture' 
							/>
							<img 
								src="https://i.ibb.co/qFV5tdp/Image-2.png"
								alt="place-job"
								className='attached-images__picture' 
							/>
						</div>
					</div>
					</div>

				</div>
				<div className='page__contact contact'>
					<div className='contact__title header-text'>
						Contacts
					</div>
					<hr className='line' />
					<div className='contact__inform'>
					<div className='contact__text'>
						<div className='contact__text__title'>
							Department name. University Hospital Giessen.
						</div>
						<div  className='contact__text__description'>
							<div  className='contact__text__description__adress'>
								<img 
              		src="https://i.ibb.co/GHjcpN0/Location.png" 
              		alt="location-icon"
              		className="contact__text__description__adress-icon-pic" 
							/>
							<div  className='contact__text__description__adress-name'>
								AKH Wien, 1090 Wien, Währinger 
							</div>
						</div>
						<div className='contact__text__description__cont'>
							+43 (01) 40400-12090,
							<br />post_akh_diz@akhwien.at
						</div>
						</div>
					</div>
					<div className='contact__map'>
map
					</div>
					</div>

				</div>
			</div>
			<div className='job-detected__button-return'>
				<button type='button' className='button-return'>
					<i className="arrow left"></i>
					RETURN TO JOB BOARD
				</button>
			</div>
		</div>
	);
}
