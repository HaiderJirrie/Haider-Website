function SkillCard(props) {

  const GradientStyling = {
    backgroundImage: `linear-gradient(to top, ${props.gradientFrom}, #ffffff)`,
    color: 'transparent',
  };

  const getBulletpoints = () => {
    return props.bulletpoints.map((point) => (
      <p className="text-gray-800 py-1">{point}</p>
    ));
  };

  return (
    <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto hover:scale-105 transition ease-in-out duration-300">
      <div className="rounded-[100px] w-fit mx-auto" style={GradientStyling}>
        <img
          className="mx-auto drop-shadow-lg"
          src={props.image}
          width={150}
          alt=""
        />
      </div>
      <h3 className="text-lg font-bold pt-8 pb-2">{props.title}</h3>
      <p className="py-2 max-w-md mx-auto">{props.text}</p>
      {getBulletpoints()}
    </div>
  );
}

export default SkillCard;
