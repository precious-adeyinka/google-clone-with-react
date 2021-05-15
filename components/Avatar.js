function Avatar ({ url, className }) {
  return (
    <img className={`h-8 rounded-full cursor-pointer transition duration-150 
    transform hover:scale-110 hover:bg-gray-100" loading="lazy ${className}`} src={url} alt="Profile Picture" />
  )
}

export default Avatar;