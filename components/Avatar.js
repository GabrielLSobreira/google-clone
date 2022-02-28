function Avatar({ url, className }) {
  return (
    <a
      href="https://github.com/GabrielLSobreira"
      target="_blank"
      rel="noopener noreferrer"
      className={`${className}`}
    >
      <img
        loading="lazy"
        className="h-10 rounded-full cursor-pointer duration-150 transform hover:scale-110"
        src={url}
        alt="profile picture"
      />
    </a>
  );
}

export default Avatar;
