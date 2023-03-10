

const About = () => {
	return (
		<>
			<div className="min-h-[87.5vh] flex flex-col items-center">
				<h1 className="text-white mx-auto font-bold text-3xl my-5">About page</h1>
				<p className="text-white text-center">This is a 'React App' which counts the words and characters in a text.</p>
				<p className="text-white text-center">Styled using 'Tailwind CSS'</p>
				<h2 className="text-white mx-auto font-bold text-2xl my-5">Contact info</h2>
				<p className="text-stone-400"><a href="mailto:shaharechaitanya3@gmail.com" target="_blank">shaharechaitanya3@gmail.com</a></p>
				<p className="text-stone-400"><a href="https://blog.chaitanyashahare.com" target="_blank">blog.chaitanyashahare.com</a></p>
			</div>
		</>
	)
}

export default About;
