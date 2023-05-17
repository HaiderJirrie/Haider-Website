function SocialMediaIcon(props) {
  return (
    <a href={props.link}>
      <img
        className="cursor-pointer hover:scale-125 transition ease-in-out duration-300"
        width={32}
        src={props.image}
        alt={props.name}
      />
    </a>
  );
}

export default SocialMediaIcon;
