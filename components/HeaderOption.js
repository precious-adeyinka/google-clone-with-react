const HeaderOption = ({Icon, title, Selected}) => {
  return (
    <div className={`flex items-center justify-center space-x-1 
    border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${Selected && "text-blue-500 border-blue-500"}`}>
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  )
}

export default HeaderOption;