function ExperienceCard(props) {

  const GradientStyling = {
    backgroundImage: `linear-gradient(to right, ${props.gradientFrom}, ${props.gradientTo})`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };
  
  return (
    <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto hover:scale-105 transition ease-in-out duration-300">
      <h3 className="font-bold text-center py-4">{props.timespan}</h3>
      <div className="flex justify-center py-6">
        <div className="pr-0 pl-4 md:pr-6 md:pl-0">
          <img width={75} src={props.image} alt={props.name} />
        </div>
        <div className="flex flex-col items-center my-auto">
          <h3 className="font-bold" style={GradientStyling}>
            {props.name}
          </h3>
          <h1>{props.location}</h1>
          <h1 className="text-center ">{props.title}</h1>
        </div>
      </div>
      <p className="text-md text-center text-slate-900 font-medium max-w-md mx-auto px-6 py-4 md:px-4 leading-7">
        {props.text}
      </p>
    </div>
  );
}

export default ExperienceCard;
