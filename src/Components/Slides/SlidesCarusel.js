import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {
	Carousel,
	CarouselCaption,
	CarouselControl,
	CarouselIndicators,
	CarouselItem
} from 'reactstrap';

const mock = [
	{
		image: 'https://picsum.photos/200/300',
		title: 'First slide label',
		description:
			'Nulla vitae elit libero, a pharetra augue mollis interdum.'
	},
	{
		image: 'https://picsum.photos/200/300',
		title: 'Second slide label',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	},
	{
		image: 'https://picsum.photos/200/300',
		title: 'Third slide label',
		description:
			'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
	}
];

export const SlidesCarusel = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex =
			activeIndex === mock.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex =
			activeIndex === 0 ? mock.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = newIndex => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = mock.map((item, i) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={i}
			>
				<img
					className="d-block w-100"
					src={item.image}
					alt={item.title}
				/>
				<CarouselCaption
					captionText={item.description}
					captionHeader={item.title}
				/>
			</CarouselItem>
		);
	});

	return (
		<div>
			<Carousel
				activeIndex={activeIndex}
				next={next}
				previous={previous}
			>
				<CarouselIndicators
					items={mock}
					activeIndex={activeIndex}
					onClickHandler={goToIndex}
				/>
				{slides}
				<CarouselControl
					direction="prev"
					directionText="Previus"
					onClickHandler={previous}
				/>
				<CarouselControl
					direction="next"
					directionText="Next"
					onClickHandler={next}
				/>
			</Carousel>
		</div>
	);
};
